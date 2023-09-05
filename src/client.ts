import { Account } from './account'
import { Board } from './board'
import { Bot } from './bot'
import { Challenge } from './challenge'
import { Users, User } from './users'
import { Analysis, Message, Simuls, TV } from './minors'
import { LichessHeaders } from './types'

export class Client {
  private readonly headers: LichessHeaders

  public account: Account
  public analysis: Analysis
  public board: Board
  public bot: Bot
  public challenge: Challenge
  public message: Message
  public simuls: Simuls
  public tv: TV
  public user: User
  public users: Users

  constructor(readonly token: string) {
    this.headers = {
      Authorization: `Bearer ${this.token}`,
    }
    this.account = new Account(this.headers)
    this.analysis = new Analysis(this.headers)
    this.board = new Board(this.headers)
    this.bot = new Bot(this.headers)
    this.challenge = new Challenge(this.headers)
    this.message = new Message(this.headers)
    this.simuls = new Simuls(this.headers)
    this.tv = new TV(this.headers)
    this.user = new User(this.headers)
    this.users = new Users(this.headers)
  }
}
