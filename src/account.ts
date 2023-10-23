import { fetcher } from './utils'
import { LICHESS_API_URL } from './constants'

const ACCOUNT_API_URL = `${LICHESS_API_URL}/account`

export class Account {
  constructor(private readonly token: string) {}

  public profile() {
    return fetcher({
      url: `${LICHESS_API_URL}/account`,
      token: this.token,
      method: 'GET',
    })
  }

  public email() {
    return fetcher({
      url: `${LICHESS_API_URL}/account/email`,
      token: this.token,
      method: 'GET',
    })
  }

  public preferences() {
    return fetcher({
      url: `${LICHESS_API_URL}/account/preferences`,
      token: this.token,
      method: 'GET',
    })
  }

  public kidMode(enable?: boolean) {
    const hasEnableValue = enable !== undefined
    return fetcher({
      url: `${LICHESS_API_URL}/account/kid?v=${enable}`,
      token: this.token,
      method: hasEnableValue ? 'POST' : 'GET',
    })
  }

  public challenges() {
    return fetcher({
      url: `${LICHESS_API_URL}/account/challenge`,
      token: this.token,
      method: 'GET',
    })
  }

  public ongoing(nb?: number) {
    return fetcher({
      url: `${LICHESS_API_URL}/account/playing?nb=${nb}`,
      token: this.token,
      method: 'GET',
    })
  }

  public following() {
    return fetcher({
      url: `${LICHESS_API_URL}/rel/following`,
      token: this.token,
      method: 'GET',
    })
  }
}
