import fetch from 'node-fetch'
import { LichessHeaders, GetUsers } from './types'
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
}
