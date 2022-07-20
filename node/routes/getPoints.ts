import jwt_decode from 'jwt-decode'

export async function getPoints(ctx: Context, next: () => Promise<any>) {
  const { clients } = ctx

  const payload: any = jwt_decode(ctx.request.header['x-vtex-credential'])
  const user_id = payload.userId as string

  const points = await clients.masterData.getPoints(user_id)

  ctx.status = 200
  ctx.body = {
    user_id,
    success: true,
    points
  }

  await next()
}
