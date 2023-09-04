import { client } from './test-utils'

let gameId: string

beforeAll(async () => {
  const initAIGame = await client.challenge.ai({
    level: 1,
    color: 'white',
    variant: 'standard',
  })
  const gameData = await initAIGame.json()
  gameId = gameData.id
})

afterAll(async () => {
  await client.board.abort(gameId)
})

describe('board.events()', () => {
  it('should stream events', async () => {
    const res = await client.board.events()
    const data = await res.json()
    expect(data).toHaveProperty('type')
  })
})

describe('board.stream()', () => {
  it('should stream game', async () => {
    const res = await client.board.stream(gameId)
    const data = await res.json()
    expect(data).toHaveProperty('id')
  })
})

describe('board.move()', () => {
  it('should move', async () => {
    const res = await client.board.move({ gameId, move: 'e2e4' })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('board.chat()', () => {
  it('should get chat', async () => {
    const res = await client.board.chat({ gameId })
    const data = await res.json()
    expect(Array.isArray(data)).toBe(true)
  })
  it('should chat', async () => {
    const res = await client.board.chat({
      gameId,
      room: 'player',
      text: 'test',
    })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('board.takeback()', () => {
  it('should takeback', async () => {
    const res = await client.board.takeback({ gameId, accept: true })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('board.draw()', () => {
  it('should draw', async () => {
    const res = await client.board.draw({ gameId, accept: true })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

// Run independent games for the tests below

describe('board.resign()', () => {
  it('should resign', async () => {
    const newResignGame = await client.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const resignGameData = await newResignGame.json()
    const resignGameId = resignGameData.id

    const res = await client.board.resign(resignGameId)
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('board.victory()', () => {
  it('should victory', async () => {
    const newVictoryGame = await client.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const victoryGameData = await newVictoryGame.json()
    const victoryGameId = victoryGameData.id

    const res = await client.board.victory(victoryGameId)
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('board.abort()', () => {
  it('should abort', async () => {
    const newAbortGame = await client.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const abortGameData = await newAbortGame.json()
    const abortGameId = abortGameData.id

    const res = await client.board.abort(abortGameId)
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})
