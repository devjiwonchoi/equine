import { JSONStream } from '../utils.ts'

export class Account {
  constructor(private readonly fetcher: Function) {}

  public async profile() {
    let response = await this.fetcher(`/api/account`)
    let json = await response.json()
    return json
  }

  public async email() {
    let response = await this.fetcher(`/api/account/email`)
    let json = await response.json()
    return json
  }

  public async preferences() {
    let response = await this.fetcher(`/api/account/preferences`)
    let json = await response.json()
    return json
  }

  public async kidMode({ enable }: { enable?: boolean } = {}) {
    let response = await this.fetcher(
      `/api/account/kid?v=${enable}`,
      enable !== undefined ? 'post' : 'get')
    let json = await response.json()
    return json

  }

  public async challenges() {
    let response = await this.fetcher(`/api/challenge`)
    let json = await response.json()
    return json
  }

  public async ongoing({ limit }: { limit?: number } = {}) {
    let response = await this.fetcher(`/api/account/playing?nb=${limit}`)
    let json = await response.json()
    return json
  }

  public async following() {
    let response = await this.fetcher(`/api/rel/following`)
    // Decode the stream and then parse it into JSON
    let stream = response.body
    let text = await stream.pipeThrough(new TextDecoderStream())
    let json = await text.pipeThrough(new JSONStream())
    return json
  }
}
