import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class MasterDataClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://bitsized.myvtex.com', context, options)
  }

  public async getPoints(userId: string): Promise<number> {
    const list = await this.http.get(`/api/dataentities/WL/search?_fields=_all&_where=(user_id=${userId}&canceled=false)`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })
    const totalPoints = list.reduce()
    return totalPoints
  }

  public async setPoints(orderId: string, userId: string, price: number, points: number): Promise<number> {
    return this.http.post(`/api/oms/pvt/orders/${orderId}${userId}${price}${points}`, {
      orderId, userId, price, points
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })
  }

  public async cancelPoints(orderId: string): Promise<number> {
    return this.http.put(`/api/dataentities/WL/${orderId}`, { canceled: true }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })
  }

  public async debitPoints(orderId: string, userId: string, price: number, points: number): Promise<number> {
    return this.http.post(`/api/oms/pvt/orders/${orderId}`, {
      orderId, userId, price, points
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })
  }
}
