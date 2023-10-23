import { fetcher } from './utils'

export class Account {
  constructor(private readonly token: string) {}

  public profile() {
    return fetcher({
      endpoint: `/account`,
      token: this.token,
    })
  }

  public email() {
    return fetcher({
      endpoint: `/account/email`,
      token: this.token,
    })
  }

  public preferences() {
    return fetcher({
      endpoint: `/account/preferences`,
      token: this.token,
    })
  }

  public kidMode({ enable }: { enable?: boolean } = {}) {
    return fetcher({
      endpoint: `/account/kid?v=${enable}`,
      token: this.token,
      post: enable !== undefined,
    })
  }

  public challenges() {
    return fetcher({
      endpoint: `/challenge`,
      token: this.token,
    })
  }

  public ongoing({ limit }: { limit?: number } = {}) {
    return fetcher({
      endpoint: `/account/playing?nb=${limit}`,
      token: this.token,
    })
  }

  public following() {
    return fetcher({
      endpoint: `/rel/following`,
      token: this.token,
    })
  }
}
