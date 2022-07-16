import type { EventContext, IOClients } from '@vtex/api'

export async function receivedOrder(ctx: EventContext<IOClients>) {
  console.log('RECEIVED ORDER', ctx.body)

  return true
}
