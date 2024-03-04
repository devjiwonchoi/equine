export class Bot {
  constructor(private readonly fetcher: Function) {}

  public async online({ nb }: { nb?: number } = {}) {
    let response = await this.fetcher(`/api/bot/online?nb=${nb}`)
    let json = await response.json()
    return json
  }

  public async upgrade() {
    let response = await this.fetcher(`/api/bot/account/upgrade`, 'post')
    let json = await response.json()
    return json
  }

  public async stream({ gameId }: { gameId: string }) {
    let response = await this.fetcher(`/api/bot/game/stream/${gameId}`)
    let json = await response.json()
    return json
  }

  public async move({ gameId, move }: { gameId: string; move: string }) {
    let response = await this.fetcher(`/api/bot/game/${gameId}/move/${move}`, 'post')
    let json = await response.json()
    return json
  }

  public async chat({
    gameId,
    room,
    text,
  }: {
    gameId: string
    room?: 'player' | 'spectator'
    text?: string
  }) {
    const isSendingChat = !!(room && text)
    let response = await this.fetcher(
      `/api/bot/game/${gameId}/chat`,
      isSendingChat ? 'post' : 'get',
      isSendingChat ? new URLSearchParams({ room, text }) : undefined)
    let json = await response.json()
    return json
  }

  public async abort({ gameId }: { gameId: string }) {
    let response = await return this.fetcher(`/api/bot/game/${gameId}/abort`, 'post')
    let json = await response.json()
    return json
  }

  public async resign({ gameId }: { gameId: string }) {
    let response = await this.fetcher(`/api/bot/game/${gameId}/resign`, 'post')
    let json = await response.json()
    return json
  }
}
