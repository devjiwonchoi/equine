import { Account } from './account'
import { LichessHeaders } from './types'

export class Client {
  private readonly headers: LichessHeaders

  public account: Account

  constructor(readonly token: string) {
    this.headers = {
      Authorization: `Bearer ${this.token}`,
    }
    this.account = new Account(this.headers)
  }
}
