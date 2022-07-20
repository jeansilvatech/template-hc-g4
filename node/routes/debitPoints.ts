import { json } from "co-body"
import jwt_decode from 'jwt-decode'

export async function debitPoints(ctx: Context, next: () => Promise<any>) {
  const { clients } = ctx

  const payload: any = jwt_decode(ctx.request.header['x-vtex-credential'])
  const user_id = payload.userId as string

  const body = await json(ctx.req)
  const debitPoints = body.debit

  let oldPoints = await clients.masterData.getPoints(user_id)

  if (debitPoints > oldPoints) {
    throw Error('O usuário não possui pontuação suficiente para este débito.')
  }

  let currentPoints = oldPoints - debitPoints

  await clients.masterData.setPoints({
    user_id,
    order_id: `debit-order-${new Date().getTime()}`,
    order_value: debitPoints,
    points: debitPoints,
    operation: 'debit',
    datetime_operation: new Date(),
    canceled: false
  })

  ctx.status = 201

  ctx.body = {
    success: true,
    oldPoints,
    debitPoints,
    currentPoints
  }

  await next()
}
