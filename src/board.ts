import { LichessHeaders, BoardSeek } from './types'
import { LICHESS_API_URL } from './constants'

export class Board {
  constructor(private readonly headers: LichessHeaders) {}

  public events() {
    return fetch(`${LICHESS_API_URL}/stream/event`, {
      headers: this.headers,
    })
  }

  public seek({
    mode,
    options: {
      rated = false,
      variant = 'standard',
      color = 'random',
      ratingRange = '',
      time,
      increment,
      days,
    },
  }: BoardSeek) {
    const ratedString = new Boolean(rated).toString()
    if (mode === 'realtime' && time && increment) {
      return fetch(`${LICHESS_API_URL}/board/seek`, {
        headers: this.headers,
        method: 'POST',
        body: new URLSearchParams({
          rated: ratedString,
          variant,
          color,
          ratingRange,
          time: time.toString(),
          increment: increment.toString(),
        }),
      })
    }
    if (mode === 'correspondence' && days) {
      return fetch(`${LICHESS_API_URL}/board/seek`, {
        headers: this.headers,
        method: 'POST',
        body: new URLSearchParams({
          rated: ratedString,
          variant,
          color,
          ratingRange,
          days: days.toString(),
        }),
      })
    }
    return undefined
  }

  public stream(gameId: string) {
    return fetch(`${LICHESS_API_URL}/board/game/stream/${gameId}`, {
      headers: this.headers,
    })
  }

  public move({ gameId, move }: { gameId: string; move: string }) {
    const offerDraw = move === 'draw'
    return fetch(
      `${LICHESS_API_URL}/board/game/${gameId}/move/${move}?offeringDraw=${offerDraw}`,
      {
        headers: this.headers,
        method: 'POST',
      }
    )
  }

  public chat({
    gameId,
    room,
    text,
  }: {
    gameId: string
    room?: 'player' | 'spectator'
    text?: string
  }) {
    const isSendingChat = room && text
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/chat`, {
      headers: this.headers,
      method: isSendingChat ? 'POST' : 'GET',
      body: isSendingChat ? new URLSearchParams({ room, text }) : undefined,
    })
  }

  public abort(gameId: string) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/abort`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public resign(gameId: string) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/resign`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public draw({ gameId, accept }: { gameId: string; accept: boolean }) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/draw/${accept}`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public takeback({ gameId, accept }: { gameId: string; accept: boolean }) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/takeback/${accept}`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public victory(gameId: string) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/claim-victory`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public BERSERK(gameId: string) {
    return fetch(`${LICHESS_API_URL}/board/game/${gameId}/berserk`, {
      headers: this.headers,
      method: 'POST',
    })
  }
}
