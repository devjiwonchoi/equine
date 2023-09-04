import fetch from 'node-fetch'
import { LichessHeaders, ChallengeAI, ChallengeOpen } from './types'
import { LICHESS_API_URL } from './constants'

export class Challenge {
  constructor(private readonly headers: LichessHeaders) {}

  public list() {
    return fetch(`${LICHESS_API_URL}/challenge`, {
      headers: this.headers,
    })
  }

  public create(username: string) {
    return fetch(`${LICHESS_API_URL}/challenge/${username}`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public accept(challengeId: string) {
    return fetch(`${LICHESS_API_URL}/challenge/${challengeId}/accept`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public decline(challengeId: string) {
    return fetch(`${LICHESS_API_URL}/challenge/${challengeId}/decline`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public cancel(challengeId: string) {
    return fetch(`${LICHESS_API_URL}/challenge/${challengeId}/cancel`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public ai({
    level,
    clockLimit,
    clockIncrement,
    days,
    color,
    variant,
    fen,
  }: ChallengeAI) {
    return fetch(`${LICHESS_API_URL}/challenge/ai`, {
      headers: this.headers,
      method: 'POST',
      body: new URLSearchParams({
        level: level ? level.toString() : '',
        clockLimit: clockLimit ? clockLimit.toString() : '',
        clockIncrement: clockIncrement ? clockIncrement.toString() : '',
        days: days ? days.toString() : '',
        color: color ? color : '',
        variant: variant ? variant : '',
        fen: fen ? fen : '',
      }),
    })
  }

  public open({
    rated,
    clockLimit,
    clockIncrement,
    days,
    color,
    variant,
    fen,
    name,
    rules,
    users,
    expiresAt,
  }: ChallengeOpen) {
    const params = new URLSearchParams({
      rated: rated ? rated.toString() : '',
      clockLimit: clockLimit ? clockLimit.toString() : '',
      clockIncrement: clockIncrement ? clockIncrement.toString() : '',
      days: days ? days.toString() : '',
      color: color ? color : '',
      variant: variant ? variant : '',
      fen: fen ? fen : '',
      name: name ? name : '',
      rules: rules ? rules : '',
      expiresAt: expiresAt ? expiresAt.toString() : '',
    })
    if (users) {
      if (Array.isArray(users)) users = users.join(',')
      users = users.replace(/\s/g, '')
      params.append('users', users.toString())
    }
    return fetch(`${LICHESS_API_URL}/challenge/open`, {
      headers: this.headers,
      method: 'POST',
      body: params,
    })
  }

  public start({
    gameId,
    token1,
    token2,
  }: {
    gameId: string
    token1: string
    token2: string
  }) {
    return fetch(
      `${LICHESS_API_URL}/challenge/${gameId}/start-clocks?token1=${token1}&token2=${token2}`,
      {
        headers: this.headers,
        method: 'POST',
      }
    )
  }

  public grant({ gameId, seconds }: { gameId: string; seconds: number }) {
    return fetch(`${LICHESS_API_URL}/round/${gameId}/add-time/${seconds}`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public admin({
    users,
    description,
  }: {
    users: string | string[]
    description: string
  }) {
    const params = new URLSearchParams()
    if (users) {
      if (Array.isArray(users)) users = users.join(',')
      users = users.replace(/\s/g, '')
      params.append('users', users.toString())
    }
    if (description) params.append('description', description)
    return fetch(`${LICHESS_API_URL}/challenge/admin`, {
      headers: this.headers,
      method: 'POST',
      body: params,
    })
  }
}
