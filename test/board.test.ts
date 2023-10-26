import { client } from './test-utils'

let gameId: string

beforeAll(async () => {
  const gameData = await client.challenge.ai({
    level: 1,
    color: 'white',
    variant: 'standard',
  })
  gameId = gameData.id
})

afterAll(async () => {
  await client.board.abort({ gameId })
})

// TODO: Figure out how to end stream
// describe('board.events()', () => {
//   it('should stream events', async () => {
//     const res = await client.board.events()
//     const data = await res.json()
//     expect(data).toBeDefined()
//   })
// })

// describe('board.stream()', () => {
//   it('should stream game', async () => {
//     const res = await client.board.stream(gameId)
//     const data = await res.json()
//     expect(data).toBeDefined()
//   })
// })

describe('board.move()', () => {
  it('should move', async () => {
    const move = await client.board.move({ gameId, move: 'e2e4' })
    expect(move.ok).toBe(true)
  })
})

describe('board.chat()', () => {
  it('should get chat', async () => {
    const chat = await client.board.chat({ gameId })
    expect(Array.isArray(chat)).toBe(true)
  })
  it('should chat', async () => {
    const chat = await client.board.chat({
      gameId,
      room: 'player',
      text: 'test',
    })
    expect(chat.ok).toBe(true)
  })
})

describe('board.takeback()', () => {
  it('should takeback', async () => {
    const takeback = await client.board.takeback({ gameId, accept: true })
    expect(takeback.ok).toBe(true)
  })
})

describe('board.draw()', () => {
  it('should draw', async () => {
    const draw = await client.board.draw({ gameId, accept: true })
    expect(draw.ok).toBe(true)
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
    const resignGameId = newResignGame.id

    const resign = await client.board.resign({ gameId: resignGameId })
    expect(resign.ok).toBe(true)
    await client.board.abort(resignGameId)
  })
})

describe('board.victory()', () => {
  it('should victory', async () => {
    const newVictoryGame = await client.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const victoryGameId = newVictoryGame.id

    const victory = await client.board.victory({ gameId: victoryGameId })
    expect(victory.ok).toBe(true)
    await client.board.abort(victoryGameId)
  })
})

describe('board.abort()', () => {
  it('should abort', async () => {
    const newAbortGame = await client.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const abortGameId = newAbortGame.id

    const abort = await client.board.abort({ gameId: abortGameId })
    expect(abort.ok).toBe(true)
  })
})
