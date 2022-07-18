import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class OrderClient extends ExternalClient {
  //public token: string | undefined;

  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://bitsized.vtexcommercestable.com.br', context, options)
    console.log(context.storeUserAuthToken)
    //this.token = context.adminUserAuthToken
  }

  public async getOrder(orderId: string): Promise<string> {
    return this.http.get(`/api/oms/pvt/orders/${orderId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'VtexIdclientAutCookie': this.token
      }
    })
  }
}
