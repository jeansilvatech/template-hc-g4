//import { UserInputError } from '@vtex/api'

export async function getPoints(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = {
    success: true,
    points: 250
  }

  await next()
}
