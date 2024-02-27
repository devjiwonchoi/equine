import type { ChallengeAI, ChallengeOpen } from '../types'
export class Challenge {
  constructor(private readonly fetcher: Function) {}

  public create({ username }: { username: string }) {
    return this.fetcher(`/challenge/${username}`, 'post')
  }

  public accept({ challengeId }: { challengeId: string }) {
    return this.fetcher(`/challenge/${challengeId}/accept`, 'post')
  }

  public decline({ challengeId }: { challengeId: string }) {
    return this.fetcher(`/challenge/${challengeId}/decline`, 'post')
  }

  public cancel({ challengeId }: { challengeId: string }) {
    return this.fetcher(`/challenge/${challengeId}/cancel`, 'post')
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
    return this.fetcher(`/challenge/ai`, 'post', params)
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
    return this.fetcher(`/challenge/open`, 'post', params)
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
    return this.fetcher(
      `/challenge/${gameId}/start-clocks?token1=${token1}&token2=${token2}`,
      'post',
    )
  }

  public grant({ gameId, seconds }: { gameId: string; seconds: number }) {
    return this.fetcher(`/round/${gameId}/add-time/${seconds}`, 'post')
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
    return this.fetcher(`/challenge/admin`, 'post', params)
  }
}
