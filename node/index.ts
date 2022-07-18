import type { ClientsConfig, ServiceContext, EventContext } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'

import { getPoints } from './routes/getPoints'
import { debitPoints } from './routes/debitPoints'

import { OrderStatusUpdated } from './events/OrderStatusUpdated'

const TIMEOUT_MS = 800

const THREE_SECONDS_MS = 3 * 1000
const CONCURRENCY = 10

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
  type Context = ServiceContext<Clients>
  interface StatusChangeContext extends EventContext<Clients> {
    body: {
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  events: {
    OrderStatusUpdated,
  },
  routes: {
    hcheck: (ctx: any) => {
      ctx.status = 200
      ctx.body = 'ok'
    },
    getPoints: method({
      GET: [getPoints]
    }),
    debitPoints: method({
      PUT: [debitPoints]
    })
  },
})
