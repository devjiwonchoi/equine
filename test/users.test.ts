import { client } from './test-utils'

describe('users.info()', () => {
  it('should support ids as string[]', async () => {
    const res = await client.users.info({ ids: ['devjiwonchoi', 'georges'] })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })

  it('should support ids as string', async () => {
    const res = await client.users.info({ ids: 'devjiwonchoi,georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })

  it('should support ids as string with whitespace', async () => {
    const res = await client.users.info({ ids: 'devjiwonchoi, georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })
})

describe('users.status()', () => {
  it('should support ids as string[]', async () => {
    const res = await client.users.status({ ids: ['devjiwonchoi', 'georges'] })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })

  it('should support ids as string', async () => {
    const res = await client.users.status({ ids: 'devjiwonchoi,georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })

  it('should support ids as string with whitespace', async () => {
    const res = await client.users.status({ ids: 'devjiwonchoi, georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })
})

describe('users.crosstable()', () => {
  it('should get crosstable', async () => {
    const res = await client.users.crosstable({
      user1: 'devjiwonchoi',
      user2: 'georges',
    })
    const data = await res.json()
    expect(data).toHaveProperty('users')
    expect(data).toHaveProperty('nbGames')
  })
})

describe('users.streaming()', () => {
  it('should get streaming users', async () => {
    const res = await client.users.streaming()
    const data = await res.json()
    expect(data.every((user: any) => user.hasOwnProperty('id'))).toBe(true)
  })
})

describe('users.leaderboard.info()', () => {
  it('should get string[] of users in the given leaderboard', async () => {
    const res = await client.users.leaderboard.info({
      nb: 10,
      perfType: 'bullet',
    })
    const data = await res.json()
    expect(data).toHaveProperty('users')
  })
})

describe('users.leaderboard.topTens()', () => {
  it('should get top 10 users per leaderboard', async () => {
    const res = await client.users.leaderboard.topTens()
    const data = await res.json()
    expect(data).toHaveProperty('bullet')
    expect(data).toHaveProperty('blitz')
  })
})
