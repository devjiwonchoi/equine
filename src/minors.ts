import { LichessHeaders, GameVariant } from './types'
import { LICHESS_API_URL } from './constants'

export class Analysis {
  constructor(private readonly fetcher: Function) {}
  public evaluate({
    fen,
    multiPv,
    variant,
  }: {
    fen: string
    multiPv?: number
    variant?: GameVariant
  }) {
    return this.fetcher(`/cloud-eval?fen=${fen}`)
  }
}

// TODO: different API endpoint
// export class Message {
//   constructor(private readonly fetcher: Function) {}
//   public send({ username, text }: { username: string; text: string }) {
//     return fetch(`https://lichess.org/inbox/${username}`, {
//       method: 'POST',
//       headers: this.headers,
//       body: new URLSearchParams({ text }),
//     })
//   }
// }

export class TV {
  constructor(private readonly fetcher: Function) {}
  public channels() {
    return this.fetcher(`/tv/channels`)
  }
  public stream() {
    return this.fetcher(`/tv/feed`)
  }
  public ongoing({
    channel,
    nb,
    moves,
    pgnInJson,
    tags,
    clocks,
    opening,
  }: {
    channel: string
    nb?: number
    moves?: string
    pgnInJson?: boolean
    tags?: boolean
    clocks?: boolean
    opening?: boolean
  }) {
    return this.fetcher(
      `/tv/${channel}?nb=${nb}&moves=${moves}&pgnInJson=${pgnInJson}&tags=${tags}&clocks=${clocks}&opening=${opening}`
    )
  }
}

export class Simuls {
  constructor(private readonly fetcher: Function) {}
  public info() {
    return this.fetcher(`/simul`)
  }
}
