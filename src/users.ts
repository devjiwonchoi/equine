import fetch from 'node-fetch'
import { LichessHeaders, GetUsers } from './types'
import { LICHESS_API_URL } from './constants'

export class Users {
  constructor(private readonly headers: LichessHeaders) {}

  public users({ ids, statusOnly }: GetUsers) {
    if (Array.isArray(ids)) ids = ids.join(',')
    return fetch(
      `${LICHESS_API_URL}/users${statusOnly ? '/status?ids=' + ids : ''}`,
      {
        headers: this.headers,
        method: statusOnly ? 'GET' : 'POST',
        body: !statusOnly ? ids : undefined,
      }
    )
  }
}
