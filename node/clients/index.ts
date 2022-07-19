import { IOClients } from '@vtex/api'

import OrderClient from './OrderClient'
import MasterDataClient from './MasterDataClient'
export class Clients extends IOClients {
  public get order() {
    return this.getOrSet('order-client', OrderClient)
  }

  public get masterData() {
    return this.getOrSet('masterdata-client', MasterDataClient)
  }
}
