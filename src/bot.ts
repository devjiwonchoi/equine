export class Bot {
  constructor(private readonly fetcher: Function) {}

  public online({ nb }: { nb?: number } = {}) {
    return this.fetcher(`/bot/online?nb=${nb}`)
  }

  public upgrade() {
    return this.fetcher(`/bot/account/upgrade`, true)
  }

  public stream({ gameId }: { gameId: string }) {
    return this.fetcher(`/bot/game/stream/${gameId}`)
  }

  public move({ gameId, move }: { gameId: string; move: string }) {
    return this.fetcher(`/bot/game/${gameId}/move/${move}`, true)
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
      `/bot/game/${gameId}/chat`,
      isSendingChat,
      isSendingChat ? new URLSearchParams({ room, text }) : undefined
    )
  }

  public abort({ gameId }: { gameId: string }) {
    return this.fetcher(`/bot/game/${gameId}/abort`, true)
  }

  public resign(gameId: string) {
    return this.fetcher(`/bot/game/${gameId}/resign`, true)
  }
}
