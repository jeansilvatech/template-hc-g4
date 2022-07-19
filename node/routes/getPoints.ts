import jwt_decode from 'jwt-decode';

export async function getPoints(ctx: Context, next: () => Promise<any>) {
  const { clients } = ctx

  const userId = (jwt_decode(ctx.vtex.authToken) as any).userId

  const pointsList = await clients.masterData.getPoints(userId)

  ctx.status = 200
  ctx.body = {
    success: true,
    points: 250,
    pointsList
  }

  await next()
}
