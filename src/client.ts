import { Account } from './api/account'
import { Board } from './api/board'
// import { Bot } from './bot'
import { Challenge } from './api/challenge'
import { Users, User } from './api/users'
import { Study } from './api/study'
// import { Analysis, Simuls, TV } from './minors'
import { fetcher } from './utils'

export class Equine {
  private fetcher: Function

  // v1 API
  public account: Account
  public board: Board
  public challenge: Challenge
  public user: User
  public users: Users
  public study: Study

  // ...v2 API
  // public analysis: Analysis
  // // TODO: different API endpoint
  // // public message: Message
  // public simuls: Simuls
  // public tv: TV
  // public bot: Bot

  constructor(private readonly token: string) {
    this.fetcher = (
      endpoint: string,
      method?: string,
      body?: URLSearchParams,
    ) => fetcher({ endpoint, token: this.token, method, body })

    // v1 API
    this.account = new Account(this.fetcher)
    this.board = new Board(this.fetcher)
    this.challenge = new Challenge(this.fetcher)
    this.user = new User(this.fetcher)
    this.users = new Users(this.fetcher)
    this.study = new Study(this.fetcher)

    // ...v2 API
    // this.analysis = new Analysis(this.fetcher)
    // // TODO: different API endpoint
    // // this.message = new Message(this.fetcher)
    // this.simuls = new Simuls(this.fetcher)
    // this.tv = new TV(this.fetcher)
    // this.bot = new Bot(this.fetcher)
  }
}
