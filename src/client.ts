import { Account } from './account'
import { Board } from './board'
import { Users, User } from './users'
import { LichessHeaders } from './types'

export class Client {
  private readonly headers: LichessHeaders

  public account: Account
  public board: Board
  public user: User
  public users: Users

  constructor(readonly token: string) {
    this.headers = {
      Authorization: `Bearer ${this.token}`,
    }
    this.account = new Account(this.headers)
    this.board = new Board(this.headers)
    this.user = new User(this.headers)
    this.users = new Users(this.headers)
  }
}
