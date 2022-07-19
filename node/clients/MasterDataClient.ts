import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { CreatePointsDto } from '../dtos/CreatePointsDto';

export default class MasterDataClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://bitsized.vtexcommercestable.com.br', context, options)
  }

  public async getPoints(userId: string): Promise<number> {
    const result = await this.http.get('/api/dataentities/WL/search?_fields=_all', {
      headers: {
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })

    let totalPoints = 0;

    result.forEach((order: { user_id: string; canceled: any; operation: 'add' | 'debit', points: number }) => {
      if (order.user_id == userId && !order.canceled) {
        if (order.operation == 'add') {
          totalPoints += order.points
        } else if (order.operation == 'debit') {
          totalPoints -= order.points
        }
      }
    })

    return totalPoints
  }

  public async getPointItem(orderId: string): Promise<any> {
    const result = await this.http.get('/api/dataentities/WL/search?_fields=_all', {
      headers: {
        'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
        'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
      }
    })

    return result.find((order: { order_id: string; }) => order.order_id == orderId)
  }

  public async setPoints(pointsDto: CreatePointsDto): Promise<void> {
    const point = await this.getPointItem(pointsDto.order_id)

    if (!point) {
      const t = await this.http.post('/api/dataentities/WL/documents', pointsDto, {
        headers: {
          'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
          'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
        }
      })
    }
  }

  public async cancelPoints(orderId: string): Promise<void> {
    const point = await this.getPointItem(orderId)

    if (point) {
      const t = await this.http.put(`/api/dataentities/WL/documents/${orderId}`, { canceled: true }, {
        headers: {
          'X-VTEX-API-AppKey': 'vtexappkey-bitsized-IKTLBO',
          'X-VTEX-API-AppToken':'GGBTSDSFKHHXYRRCLMKXIRZXZJJBCGWMOBJUFFLNWTIJGXXKOFPHIZDKAKFRNCRCJDCCAODWZLCPVLCMKHRCNTBKLAWUTNFCKPQAMAPNFJDJGSNUXININIFXIQIWURKM'
        }
      })
    }
  }
}
