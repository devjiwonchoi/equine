import { lichess } from './test-utils'

describe('analysis.evaluate()', () => {
  it('should return an analysis report', async () => {
    const res = await lichess.analysis.evaluate({
      fen: 'rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR',
    })
    const data = await res.json()
    expect(data).toHaveProperty('depth')
  })
})

describe('message.send()', () => {
  it('should send a message to a user', async () => {
    const res = await lichess.message.send({
      username: 'devjiwonchoi',
      text: 'Hello, world!',
    })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('simuls.info()', () => {
  it('should return simul info', async () => {
    const res = await lichess.simuls.info()
    const data = await res.json()
    expect(data).toHaveProperty('pending')
  })
})

describe('tv.channels()', () => {
  it('should get current tv channels', async () => {
    const res = await lichess.tv.channels()
    const data = await res.json()
    expect(data).toHaveProperty('bot')
  })
})

// TODO: Figure out stream testing
// describe('tv.stream()', () => {
//   it('should stream tv channels', async () => {
//     const res = await lichess.tv.stream()
//     const data = await res.json()
//     expect(data.d).toHaveProperty('id')
//   })
// })

// TODO: Fix ongoing test - currently GET lets download as a file on browser
// describe('tv.ongoing()', () => {
//   it('should get ongoing tv games on channel', async () => {
//     const res = await lichess.tv.ongoing({
//       channel: 'bot',
//     })
//     const data = await res.json()
//     expect(data).toHaveProperty('games')
//   })
// })
