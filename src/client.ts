import { Account } from './account'
import { Board } from './board'
import { Bot } from './bot'
import { Challenge } from './challenge'
import { Users, User } from './users'
import { Analysis, Message, Simuls, TV } from './minors'
import { fetcher } from './utils'
import { LichessHeaders } from './types'

export class Equine {
  private fetcher: Function
  // TODO: remove this and integrate fetcher
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

  constructor(private readonly token: string) {
    this.fetcher = (endpoint: string, post?: boolean) =>
      fetcher({ endpoint, token: this.token, post })

    // TODO: remove this and integrate fetcher
    this.headers = {
      Authorization: `Bearer ${this.token}`,
    }

    this.account = new Account(this.fetcher)
    this.analysis = new Analysis(this.headers)
    this.board = new Board(this.fetcher)
    this.bot = new Bot(this.headers)
    this.challenge = new Challenge(this.headers)
    this.message = new Message(this.headers)
    this.simuls = new Simuls(this.headers)
    this.tv = new TV(this.headers)
    this.user = new User(this.headers)
    this.users = new Users(this.headers)
  }
}
