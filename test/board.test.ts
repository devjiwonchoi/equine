import { client } from './test-utils'

describe('board.events()', () => {
  it('returns a stream of events', async () => {
    const res = await client.board.events()
    expect(res.status).toEqual(200)
  })
})

// TODO: find a way to test these
// describe('board.stream()', () => {
//   it('returns stream of the state of a game', async () => {
//     const stream = await client.board.stream('gameId')
//     expect(stream.status).toEqual(200)
//   })
// })
// describe('board.move()', () => {
//   it('makes a move', async () => {
//     const res = await client.board.move('gameId', 'e2e4')
//     const data = await res.json()
//     expect(data.ok).toEqual(true)
//   })
// })
// describe('board.chat()', () => {
//   it('gets chat messages', async () => {
//     const res = await client.board.chat({ gameId: 'gameId' })
//     const data = await res.json()
//     expect(Array.isArray(data)).toBe(true)
//   })
//   it('sends a chat message', async () => {
//     const res = await client.board.chat({
//       gameId: 'gameId',
//       room: 'player',
//       text: 'hello',
//     })
//     const data = await res.json()
//     expect(data.ok).toEqual(true)
//   })
// })
