export async function OrderStatusUpdated(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients } = ctx

  const approved = 'payment-approved'
  const canceled = 'cancel'

  const orderId = ctx.body.orderId

  const order: any = await clients.order.getOrder(orderId)
  if (ctx.body.currentState == approved) {
    const price = order.value
    const points = Math.floor(price / 100)

    console.log('Pagamento aprovado: ', orderId, 'R$ ', order.value, points)
  } else if (ctx.body.currentState == canceled) {
    console.log('Cancelado: ', ctx.body.orderId)
  } else {
    console.log('Outros estados: ', ctx.body.lastState, ' - ', orderId)
  }

  await next()
}
