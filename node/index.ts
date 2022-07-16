import type { ClientsConfig, ServiceContext, RecorderState, ParamsContext } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'

import { receivedOrder } from './events/received-order'
import { setCacheContext } from './utils/cachedContext'

import { Clients } from './clients'
import { status } from './middlewares/status'
import { validate } from './middlewares/validate'
import { getPoints } from './middlewares/getPoints'
import { debitPoints } from './middlewares/debitPoints'

const TIMEOUT_MS = 800

const THREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('status', memoryCache)

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    // This key will be merged with the default options and add this cache to our Status client.
    status: {
      memoryCache,
    },
    events: {
      exponentialTimeoutCoefficient: 2,
      exponentialBackoffCoefficient: 2,
      initialBackoffDelay: 50,
      retries: 1,
      timeout: THREE_SECONDS_MS,
      concurrency: CONCURRENCY,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients, State>

  // The shape of our State object found in `ctx.state`. This is used as state bag to communicate between middlewares.
  interface State extends RecorderState {
    code: number
  }
}

// Export a service that defines route handlers and client options.
export default new Service<Clients, State, ParamsContext>({
  clients,
  events: {
    receivedOrder: receivedOrder,
  },
  routes: {
    hcheck: (ctx: any) => {
      setCacheContext(ctx),
      ctx.set('Cache-Control', 'no-cache')
      ctx.status = 200
      ctx.body = 'ok'
    },
    status: method({
      GET: [validate, status],
    }),
    getPoints: method({
      GET: [getPoints]
    }),
    debitPoints: method({
      PUT: [debitPoints]
    })
  },
})
