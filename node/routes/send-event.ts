export async function createSendEvent(ctx: Context) {
  await ctx.clients?.events.sendEvent('', 'send-event', {
    random: Math.round(Math.random() * 100).toString(),
  })
  ctx.status = 200
  ctx.body = 'Event sent'
  console.log('SENT EVENT')
}
