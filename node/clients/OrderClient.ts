import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class OrderClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://bitsized.myvtex.com', context, options)
  }

  public async getOrder(orderId: string): Promise<string> {
    return this.http.get(`/api/oms/pvt/orders/${orderId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })
  }
}
