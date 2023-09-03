import fetch from 'node-fetch'
import { LichessHeaders, GetUsers, GetUser } from './types'
import { LICHESS_API_URL } from './constants'

export class Users {
  constructor(private readonly headers: LichessHeaders) {}

  public info({ ids }: GetUsers) {
    if (Array.isArray(ids)) ids = ids.join(',')
    ids = ids.replace(/\s/g, '')
    return fetch(`${LICHESS_API_URL}/users`, {
      headers: this.headers,
      method: 'POST',
      body: ids,
    })
  }

  public status({ ids }: GetUsers) {
    if (Array.isArray(ids)) ids = ids.join(',')
    ids = ids.replace(/\s/g, '')
    return fetch(`${LICHESS_API_URL}/users/status?ids=${ids}`, {
      headers: this.headers,
    })
  }

  public crosstable({
    user1,
    user2,
    matchup = false,
  }: {
    user1: string
    user2: string
    matchup?: boolean
  }) {
    return fetch(
      `${LICHESS_API_URL}/crosstable/${user1}/${user2}?matchup=${matchup}`,
      {
        headers: this.headers,
      }
    )
  }

  public streaming() {
    return fetch(`${LICHESS_API_URL}/streamer/live`, {
      headers: this.headers,
    })
  }
}

export class User {
  constructor(private readonly headers: LichessHeaders) {}

  public info(username: string) {
    return fetch(`${LICHESS_API_URL}/user/${username}`, {
      headers: this.headers,
    })
  }

  public history(username: string) {
    return fetch(`${LICHESS_API_URL}/user/${username}/rating-history`, {
      headers: this.headers,
    })
  }

  public performance({ username, perfType }: GetUser) {
    return fetch(`${LICHESS_API_URL}/user/${username}/perf/${perfType}`, {
      headers: this.headers,
    })
  }

  public activity(username: string) {
    return fetch(`${LICHESS_API_URL}/user/${username}/activity`, {
      headers: this.headers,
    })
  }

  public autocomplete({ term, details = false, friendPrior = false }: GetUser) {
    return fetch(
      `${LICHESS_API_URL}/player/autocomplete?term=${term}&object=${details}&friend=${friendPrior}`,
      {
        headers: this.headers,
      }
    )
  }

  public note({ username, text }: GetUser) {
    const hasText = typeof text === 'string' && text.length > 0
    return fetch(`${LICHESS_API_URL}/user/${username}/note`, {
      headers: this.headers,
      method: hasText ? 'POST' : 'GET',
      body: hasText ? new URLSearchParams({ text }) : undefined,
    })
  }
}

export class LeaderBoard {
  constructor(private readonly headers: LichessHeaders) {}

  public info({ nb, perfType }: { nb: number; perfType: string }) {
    return fetch(`${LICHESS_API_URL}/player/top/${nb}/${perfType}`, {
      headers: this.headers,
    })
  }

  // TODO: define perfTypes
  public topTens() {
    return fetch(`${LICHESS_API_URL}/player`, {
      headers: this.headers,
    })
  }
}