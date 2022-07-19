export async function OrderStatusUpdated(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients } = ctx

  const approved = 'payment-approved'
  const canceled = 'cancel'

  const orderId = ctx.body.orderId

  if (ctx.body.currentState == approved) {
    const order: any = await clients.order.getOrder(orderId)
    const price = order.value
    const points = Math.floor(price / 100)
    const userId = ''
    console.log(ctx.vtex)
    await clients.masterData.setPoints(orderId, userId, price, points)
  } else if (ctx.body.currentState == canceled) {
    await clients.masterData.cancelPoints(orderId)
  }

  await next()
}
