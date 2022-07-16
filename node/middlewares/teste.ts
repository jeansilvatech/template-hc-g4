//import { UserInputError } from '@vtex/api'

export async function teste(ctx: Context, next: () => Promise<any>) {
  ctx.status = 301
  ctx.body = {teste: 'teste--'}

  await next()
}
