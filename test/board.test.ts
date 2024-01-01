import { lichess } from './test-utils'

let gameId: string

beforeAll(async () => {
  const gameData = await lichess.challenge.ai({
    level: 1,
    color: 'white',
    variant: 'standard',
  })
  gameId = gameData.id
})

// TODO: Figure out how to end stream
// describe('board.events()', () => {
//   it('should stream events', async () => {
//     const res = await lichess.board.events()
//     const data = await res.json()
//     expect(data).toBeDefined()
//   })
// })

// describe('board.stream()', () => {
//   it('should stream game', async () => {
//     const res = await lichess.board.stream(gameId)
//     const data = await res.json()
//     expect(data).toBeDefined()
//   })
// })

describe('board.move()', () => {
  it('should move', async () => {
    const move = await lichess.board.move({ gameId, move: 'e2e4' })
    expect(move.ok).toBe(true)
  })
})

describe('board.chat()', () => {
  it('should get chat', async () => {
    const chat = await lichess.board.chat({ gameId })
    expect(Array.isArray(chat)).toBe(true)
  })
  it('should chat', async () => {
    const chat = await lichess.board.chat({
      gameId,
      room: 'player',
      text: 'test',
    })
    expect(chat.ok).toBe(true)
  })
})

describe('board.takeback()', () => {
  it('should takeback', async () => {
    const takeback = await lichess.board.takeback({ gameId, accept: true })
    expect(takeback.ok).toBe(true)
  })
})

describe('board.draw()', () => {
  it('should draw', async () => {
    const draw = await lichess.board.draw({ gameId, accept: true })
    expect(draw.ok).toBe(true)
  })
})

describe('board.abort()', () => {
  it('should abort', async () => {
    const abort = await lichess.board.abort({ gameId })
    expect(abort.ok).toBe(true)
  })
})

// Run independent games for the tests below
describe('board.resign()', () => {
  it('should resign', async () => {
    const newResignGame = await lichess.challenge.ai({
      level: 1,
      color: 'white',
      variant: 'standard',
    })
    const resignGameId = newResignGame.id

    const resign = await lichess.board.resign({ gameId: resignGameId })
    expect(resign.ok).toBe(true)
  })
})

