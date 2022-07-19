export async function getPoints(ctx: Context, next: () => Promise<any>) {
  const { clients } = ctx
  const user_id = ctx.vtex.route.params.user_id as string

  const points = await clients.masterData.getPoints(user_id)

  ctx.status = 200
  ctx.body = {
    user_id,
    success: true,
    points
  }

  await next()
}
