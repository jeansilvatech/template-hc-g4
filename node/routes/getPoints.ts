// Descomentar  as linhas 3, 4 e 8 para testar a conexão

//import connect from '../mysql'
//const mysql: any = connect()

export async function getPoints(ctx: Context, next: () => Promise<any>) {

  //mysql.query('select now()')

  ctx.status = 200
  ctx.body = {
    success: true,
    points: 250
  }

  await next()
}
