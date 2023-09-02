import fetch from 'node-fetch'
import { LichessHeaders } from './types'
import { LICHESS_API_URL } from './constants'

export class Account {
  constructor(private headers: LichessHeaders) {}
  public profile() {
    return fetch(`${LICHESS_API_URL}/account`, {
      headers: this.headers,
    })
  }
  public email() {
    return fetch(`${LICHESS_API_URL}/account/email`, {
      headers: this.headers,
    })
  }
  public preferences() {
    return fetch(`${LICHESS_API_URL}/account/preferences`, {
      headers: this.headers,
    })
  }
  public kidMode(enable?: boolean) {
    const hasEnable = typeof enable === 'boolean'
    return fetch(`${LICHESS_API_URL}/account/kid?v=${enable}`, {
      method: hasEnable ? 'POST' : 'GET',
      headers: this.headers,
    })
  }
}
