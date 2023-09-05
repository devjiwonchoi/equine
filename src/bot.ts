import fetch from 'node-fetch'
import { LichessHeaders } from './types'
import { LICHESS_API_URL } from './constants'

export class Bot {
  constructor(private readonly headers: LichessHeaders) {}

  public online(nb?: number) {
    return fetch(`${LICHESS_API_URL}/bot/online?nb=${nb}`, {
      headers: this.headers,
    })
  }

  public UPGRADE() {
    return fetch(`${LICHESS_API_URL}/bot/account/upgrade`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public stream(gameId: string) {
    return fetch(`${LICHESS_API_URL}/bot/game/stream/${gameId}`, {
      headers: this.headers,
    })
  }

  public move({ gameId, move }: { gameId: string; move: string }) {
    return fetch(`${LICHESS_API_URL}/bot/game/${gameId}/move/${move}`, {
      headers: this.headers,
      method: 'POST',
    })
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
    return fetch(`${LICHESS_API_URL}/bot/game/${gameId}/chat`, {
      headers: this.headers,
      method: isSendingChat ? 'POST' : 'GET',
      body: isSendingChat ? new URLSearchParams({ room, text }) : undefined,
    })
  }

  public abort(gameId: string) {
    return fetch(`${LICHESS_API_URL}/bot/game/${gameId}/abort`, {
      headers: this.headers,
      method: 'POST',
    })
  }

  public resign(gameId: string) {
    return fetch(`${LICHESS_API_URL}/bot/game/${gameId}/resign`, {
      headers: this.headers,
      method: 'POST',
    })
  }
}
