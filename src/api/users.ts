import { GetUsers, GetUser } from '../types'
import { JSONStream } from '../utils.ts'

class LeaderBoard {
  constructor(private readonly fetcher: Function) {}

  public async info({ nb, perfType }: { nb: number; perfType: string }) {
    let response = await this.fetcher(`/api/player/top/${nb}/${perfType}`)
    let json = await response.json()
    return json
  }

  // TODO: define perfTypes
  public async topTens() {
    let response = await this.fetcher(`/api/player`)
    let json = await response.json()
    return json
  }
}

export class Users {
  public leaderboard: LeaderBoard

  constructor(private readonly fetcher: Function) {
    this.leaderboard = new LeaderBoard(this.fetcher)
  }

  public async info({ ids }: GetUsers) {
    if (Array.isArray(ids)) ids = ids.join(',')
    ids = ids.replace(/\s/g, '')
    let response = await this.fetcher(`/api/users`, 'post', ids)
    let json = await response.json()
    return json
  }

  public async status({ ids }: GetUsers) {
    if (Array.isArray(ids)) ids = ids.join(',')
    ids = ids.replace(/\s/g, '')
    let response = await this.fetcher(`/api/users/status?ids=${ids}`)
    let json = await response.json()
    return json
  }

  public async crosstable({
    user1,
    user2,
    matchup = false,
  }: {
    user1: string
    user2: string
    matchup?: boolean
  }) {
    let response = await this.fetcher(`/api/crosstable/${user1}/${user2}?matchup=${matchup}`)
    let json = await response.json()
    return json
  }

  public async streaming() {
    let response = await this.fetcher(`/api/streamer/live`)
    let json = await response.json()
    return json
  }
}

export class User {
  constructor(private readonly fetcher: Function) {}

  public async info({ username }: { username: string }) {
    let response = await this.fetcher(`/api/user/${username}`)
    let json = await response.json()
    return json
  }

  public async history({ username }: { username: string }) {
    let response = await this.fetcher(`/api/user/${username}/rating-history`)
    let json = await response.json()
    return json
  }

  public async performance({
    username,
    perfType,
  }: {
    username: string
    perfType: string
  }) {
    let response = await this.fetcher(`/api/user/${username}/perf/${perfType}`)
    let json = await response.json()
    return json
  }

  public async activity({ username }: { username: string }) {
    let response = await this.fetcher(`/api/user/${username}/activity`)
    let json = await response.json()
    return json
  }

  public async autocomplete({ term, details = false, friendPrior = false }: GetUser) {
    let response = await this.fetcher(
      `/api/player/autocomplete?term=${term}&object=${details}&friend=${friendPrior}`)
    let json = await response.json()
    return json
  }

  public async note({ username, text }: { username: string; text?: string }) {
    const hasText = typeof text === 'string' && text.length > 0
    let response = await this.fetcher(
      `/api/user/${username}/note`,
      hasText ? 'post' : 'get',
      hasText ? new URLSearchParams({ text }) : undefined)
    let json = await response.json()
    return json
  }

  public async follow({ username }: { username: string }) {
    let response = await this.fetcher(`/api/rel/follow/${username}`, 'post')
    let json = await response.json()
    return json
  }

  public async unfollow({ username }: { username: string }) {
    let response = await this.fetcher(`/api/rel/unfollow/${username}`, 'post')
    let json = await response.json()
    return json
  }

  public async studies({ username }: { username: string }) {
    let response = await this.fetcher(`/api/study/by/${username}`)
    // Decode stream and parse it into JSON
    let stream = response.body
    let text = await stream.pipeThrough(new TextDecoderStream())
    let json = await text.pipeThrough(new JSONStream())
    return json
  }
}
