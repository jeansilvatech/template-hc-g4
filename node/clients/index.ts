import { IOClients } from '@vtex/api'

import Analytics from './analytics'
import Status from './status'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get analytics() {
    return this.getOrSet('analytics', Analytics)
  }
}
