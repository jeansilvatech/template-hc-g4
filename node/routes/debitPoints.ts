import { json } from "co-body"
import jwt_decode from 'jwt-decode';

export async function debitPoints(ctx: Context, next: () => Promise<any>) {
  const { clients } = ctx
  const userId = (jwt_decode(ctx.vtex.authToken) as any).userId

  const body = await json(ctx.req)
  const debitPoints = body.debit

  let oldPoints = await clients.masterData.getPoints(userId)
  let currentPoints = oldPoints - debitPoints

  await clients.masterData.debitPoints(userId, '', 1, 1)

  ctx.status = 201

  ctx.body = {
    success: true,
    oldPoints,
    debitPoints,
    currentPoints
  }

  await next()
}
