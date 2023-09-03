import { client } from './test-utils'

describe('user.info()', () => {
  it('should get user public data', async () => {
    const res = await client.user.info('devjiwonchoi')
    const data = await res.json()
    expect(data).toHaveProperty('id')
    expect(data).toHaveProperty('username')
  })
})

describe('user.history()', () => {
  it('should get user rating history', async () => {
    const res = await client.user.history('devjiwonchoi')
    const data = await res.json()
    expect(data[0]).toHaveProperty('name')
    expect(data[0]).toHaveProperty('points')
  })
})

describe('user.performance()', () => {
  it('should get user performance', async () => {
    const res = await client.user.performance({
      username: 'devjiwonchoi',
      perfType: 'bullet',
    })
    const data = await res.json()
    expect(data).toHaveProperty('perf')
    expect(data).toHaveProperty('rank')
  })
})

describe('user.activity()', () => {
  it('should get user activity', async () => {
    const res = await client.user.activity('devjiwonchoi')
    const data = await res.json()
    expect(data[0]).toHaveProperty('interval')
  })
})

describe('user.autocomplete()', () => {
  it('should get string[] of username(s)', async () => {
    const res = await client.user.autocomplete({
      term: 'devjiwon',
    })
    const data = await res.json()
    expect.extend({
      toBeArrayOfStrings(received) {
        const pass =
          Array.isArray(received) &&
          received.every((i) => typeof i === 'string')
        if (pass) {
          return {
            message: () => `expected ${received} to be an array of strings`,
            pass: true,
          }
        } else {
          return {
            message: () => `expected ${received} to be an array of strings`,
            pass: false,
          }
        }
      },
    })
    expect(data).toContain('devjiwonchoi')
  })

  it('should get details of users also', async () => {
    const res = await client.user.autocomplete({
      term: 'devjiwon',
      details: true,
    })
    const data = await res.json()
    expect(data.result).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ id: 'devjiwonchoi' })])
    )
  })

  // TODO: investigate API, currently is returning undefined
  // it('should get string[] of username(s), friends prior', async () => {
  //   const res = await client.user.autocomplete({
  //     term: 'devjiwon',
  //     friendPrior: true,
  //   })
  //   const data = await res.json()
  //   expect(data.result).toContain('devjiwonchoi')
  // })
})

// TODO: investigate API, currently is returning undefined
// describe('user.note()', () => {
//   it('should get user note', async () => {
//     const res = await client.user.note({
//       username: 'devjiwonchoi',
//     })
//     const data = await res.json()
//     expect(data[0]).toHaveProperty('from')
//     expect(data[0]).toHaveProperty('to')
//   })

//   it('should post user note', async () => {
//     const res = await client.user.note({
//       username: 'devjiwonchoi',
//       text: 'test',
//     })
//     const data = await res.json()
//     expect(data.ok).toBe(true)
//   })
// })

describe('leaderboard.info()', () => {
  it('should get string[] of users in the given leaderboard', async () => {
    const res = await client.leaderboard.info({
      nb: 10,
      perfType: 'bullet',
    })
    const data = await res.json()
    expect(data).toHaveProperty('users')
  })
})

describe('leaderboard.topTens()', () => {
  it('should get top 10 users per leaderboard', async () => {
    const res = await client.leaderboard.topTens()
    const data = await res.json()
    expect(data).toHaveProperty('bullet')
    expect(data).toHaveProperty('blitz')
  })
})
