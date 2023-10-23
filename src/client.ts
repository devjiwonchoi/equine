import { Account } from './account'
import { Board } from './board'
import { Bot } from './bot'
import { Challenge } from './challenge'
import { Users, User } from './users'
import { Analysis, Message, Simuls, TV } from './minors'
import { fetcher } from './utils'
import { LichessHeaders } from './types'

export class Equine {
  public account: Account
  private fetcher: Function
  // public analysis: Analysis
  // public board: Board
  // public bot: Bot
  // public challenge: Challenge
  // public message: Message
  // public simuls: Simuls
  // public tv: TV
  // public user: User
  // public users: Users

  constructor(private readonly token: string) {
    this.fetcher = (endpoint: string, post?: boolean) =>
      fetcher({ endpoint, token: this.token, post })
    this.account = new Account(this.fetcher)
    // this.analysis = new Analysis(this.token)
    // this.board = new Board(this.token)
    // this.bot = new Bot(this.token)
    // this.challenge = new Challenge(this.token)
    // this.message = new Message(this.token)
    // this.simuls = new Simuls(this.token)
    // this.tv = new TV(this.token)
    // this.user = new User(this.token)
    // this.users = new Users(this.token)
  }
}
