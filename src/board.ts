export class Board {
  constructor(private readonly fetcher: Function) {}

  public events() {
    return this.fetcher(`/stream/event`)
  }

  // TODO: seek()
  // public seek({
  //   mode,
  //   options: {
  //     rated = false,
  //     variant = 'standard',
  //     color = 'random',
  //     ratingRange = '',
  //     time,
  //     increment,
  //     days,
  //   },
  // }: BoardSeek) {
  //   const ratedString = new Boolean(rated).toString()
  //   if (mode === 'realtime' && time && increment) {
  //     return fetch(`${LICHESS_API_URL}/board/seek`, {
  //       headers: this.headers,
  //       method: 'POST',
  //       body: new URLSearchParams({
  //         rated: ratedString,
  //         variant,
  //         color,
  //         ratingRange,
  //         time: time.toString(),
  //         increment: increment.toString(),
  //       }),
  //     })
  //   }
  //   if (mode === 'correspondence' && days) {
  //     return fetch(`${LICHESS_API_URL}/board/seek`, {
  //       headers: this.headers,
  //       method: 'POST',
  //       body: new URLSearchParams({
  //         rated: ratedString,
  //         variant,
  //         color,
  //         ratingRange,
  //         days: days.toString(),
  //       }),
  //     })
  //   }
  //   return undefined
  // }

  public stream(gameId: string) {
    return this.fetcher(`/board/game/stream/${gameId}`)
  }

  public move({ gameId, move }: { gameId: string; move: string }) {
    const offerDraw = move === 'draw'
    return this.fetcher(
      `/board/game/${gameId}/move/${move}?offeringDraw=${offerDraw}`,
      true
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
    const isSendingChat = !!(room && text)
    return this.fetcher(
      `/board/game/${gameId}/chat`,
      isSendingChat,
      isSendingChat ? new URLSearchParams({ room, text }) : undefined
    )
  }

  public abort(gameId: string) {
    return this.fetcher(`/board/game/${gameId}/abort`, true)
  }

  public resign(gameId: string) {
    return this.fetcher(`/board/game/${gameId}/resign`, true)
  }

  public draw({ gameId, accept }: { gameId: string; accept: boolean }) {
    return this.fetcher(`/board/game/${gameId}/draw/${accept}`, true)
  }

  public takeback({ gameId, accept }: { gameId: string; accept: boolean }) {
    return this.fetcher(`/board/game/${gameId}/takeback/${accept}`, true)
  }

  public victory(gameId: string) {
    return this.fetcher(`/board/game/${gameId}/claim-victory`, true)
  }

  public berserk(gameId: string) {
    return this.fetcher(`/board/game/${gameId}/berserk`, true)
  }
}
