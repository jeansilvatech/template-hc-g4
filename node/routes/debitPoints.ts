//import { UserInputError } from '@vtex/api'

import { json } from "co-body"

export async function debitPoints(ctx: Context, next: () => Promise<any>) {
  const body = await json(ctx.req)

  let oldPoints = 250

  const debitPoints = body.debit

  let currentPoints = oldPoints - debitPoints

  ctx.status = 201

  ctx.body = {
    success: true,
    oldPoints,
    debitPoints,
    currentPoints
  }

  await next()
}
