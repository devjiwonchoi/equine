import fetch from 'node-fetch'
import { LichessHeaders } from './types'
import { LICHESS_API_URL } from './constants'

const ACCOUNT_API_URL = `${LICHESS_API_URL}/account`

export class Account {
  constructor(private readonly headers: LichessHeaders) {}

  public profile() {
    return fetch(ACCOUNT_API_URL, {
      headers: this.headers,
    })
  }

  public email() {
    return fetch(`${ACCOUNT_API_URL}/email`, {
      headers: this.headers,
    })
  }

  public preferences() {
    return fetch(`${ACCOUNT_API_URL}/preferences`, {
      headers: this.headers,
    })
  }

  public kidMode(enable?: boolean) {
    const hasEnable = typeof enable === 'boolean'
    return fetch(`${ACCOUNT_API_URL}/kid?v=${enable}`, {
      method: hasEnable ? 'POST' : 'GET',
      headers: this.headers,
    })
  }

  public ongoing(nb?: number) {
    return fetch(`${ACCOUNT_API_URL}/playing?nb=${nb}`, {
      headers: this.headers,
    })
  }
}
