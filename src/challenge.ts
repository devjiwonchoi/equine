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

  // TODO: refactor
  public ai({
    level,
    clockLimit,
    clockIncrement,
    days,
    color,
    variant,
    fen,
  }: ChallengeAI) {
    const params = new URLSearchParams()
    if (level) params.append('level', level.toString())
    if (clockLimit) params.append('clock.limit', clockLimit.toString())
    if (clockIncrement)
      params.append('clock.increment', clockIncrement.toString())
    if (days) params.append('days', days.toString())
    if (color) params.append('color', color)
    if (variant) params.append('variant', variant)
    if (fen) params.append('fen', fen)
    return fetch(`${LICHESS_API_URL}/challenge/ai`, {
      headers: this.headers,
      method: 'POST',
      body: params,
    })
  }

  // TODO: refactor
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
    const params = new URLSearchParams()
    if (rated) params.append('rated', rated.toString())
    if (clockLimit) params.append('clock.limit', clockLimit.toString())
    if (clockIncrement !== undefined)
      params.append('clock.increment', clockIncrement.toString())
    if (days) params.append('days', days.toString())
    if (color) params.append('color', color)
    if (variant) params.append('variant', variant)
    if (fen) params.append('fen', fen)
    if (name) params.append('name', name)
    if (rules) params.append('rules', rules)
    if (users) {
      if (Array.isArray(users)) users = users.join(',')
      users = users.replace(/\s/g, '')
      params.append('users', users.toString())
    }
    if (expiresAt) params.append('expiresAt', expiresAt.toString())
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
