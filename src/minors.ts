import { LichessHeaders, GameVariant } from './types'
import { LICHESS_API_URL } from './constants'

export class Analysis {
  constructor(private readonly headers: LichessHeaders) {}
  public evaluate({
    fen,
    multiPv,
    variant,
  }: {
    fen: string
    multiPv?: number
    variant?: GameVariant
  }) {
    return fetch(`${LICHESS_API_URL}/cloud-eval?fen=${fen}`, {
      headers: this.headers,
    })
  }
}

export class Message {
  constructor(private readonly headers: LichessHeaders) {}
  public send({ username, text }: { username: string; text: string }) {
    return fetch(`https://lichess.org/inbox/${username}`, {
      method: 'POST',
      headers: this.headers,
      body: new URLSearchParams({ text }),
    })
  }
}

export class TV {
  constructor(private readonly headers: LichessHeaders) {}
  public channels() {
    return fetch(`${LICHESS_API_URL}/tv/channels`, {
      headers: this.headers,
    })
  }
  public stream() {
    return fetch(`${LICHESS_API_URL}/tv/feed`, {
      headers: this.headers,
    })
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
    return fetch(
      `${LICHESS_API_URL}/tv/${channel}?nb=${nb}&moves=${moves}&pgnInJson=${pgnInJson}&tags=${tags}&clocks=${clocks}&opening=${opening}`,
      {
        headers: this.headers,
      }
    )
  }
}

export class Simuls {
  constructor(private readonly headers: LichessHeaders) {}
  public info() {
    return fetch(`${LICHESS_API_URL}/simul`, {
      headers: this.headers,
    })
  }
}
