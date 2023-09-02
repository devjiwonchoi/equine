import { Account } from './account'
import { Users } from './users'
import { LichessHeaders } from './types'

export class Client {
  private readonly headers: LichessHeaders

  public account: Account
  public users: Users

  constructor(readonly token: string) {
    this.headers = {
      Authorization: `Bearer ${this.token}`,
    }
    this.account = new Account(this.headers)
    this.users = new Users(this.headers)
  }
}
