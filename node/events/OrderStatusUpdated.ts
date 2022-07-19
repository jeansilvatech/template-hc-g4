export async function OrderStatusUpdated(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients } = ctx

  const approved = 'payment-approved'
  const canceled = 'cancel'

  const order_id = ctx.body.orderId

  if (ctx.body.currentState == approved) {
    const order: any = await clients.order.getOrder(order_id)
    const order_value = order.value
    const points = Math.floor(order_value / 100)
    const user_id = order.clientProfileData.userProfileId
    await clients.masterData.setPoints({
      user_id,
      order_id,
      order_value,
      points,
      operation: 'add',
      datetime_operation: new Date(),
      canceled: false
    })
  } else if (ctx.body.currentState == canceled) {
    await clients.masterData.cancelPoints(order_id)
  }

  await next()
}
