import { IOClients } from '@vtex/api'

import OrderClient from './OrderClient'
export class Clients extends IOClients {
  public get order() {
    return this.getOrSet('order-client', OrderClient)
  }
}
