import { Account } from './account'
import { Board } from './board'
import { Bot } from './bot'
import { Challenge } from './challenge'
import { Users, User } from './users'
import { Analysis, Simuls, TV } from './minors'
import { fetcher } from './utils'
import { LichessHeaders } from './types'

export class Equine {
  private fetcher: Function

  public account: Account
  public analysis: Analysis
  public board: Board
  public bot: Bot
  public challenge: Challenge
  // TODO: different API endpoint
  // public message: Message
  public simuls: Simuls
  public tv: TV
  public user: User
  public users: Users

  constructor(private readonly token: string) {
    this.fetcher = (endpoint: string, post?: boolean) =>
      fetcher({ endpoint, token: this.token, post })

    this.account = new Account(this.fetcher)
    this.analysis = new Analysis(this.fetcher)
    this.board = new Board(this.fetcher)
    this.bot = new Bot(this.fetcher)
    this.challenge = new Challenge(this.fetcher)
    // TODO: different API endpoint
    // this.message = new Message(this.fetcher)
    this.simuls = new Simuls(this.fetcher)
    this.tv = new TV(this.fetcher)
    this.user = new User(this.fetcher)
    this.users = new Users(this.fetcher)
  }
}
