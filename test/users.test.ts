import { lichess } from './test-utils'

describe('users.info()', () => {
  it('should support ids as string[]', async () => {
    const info = await lichess.users.info({ ids: ['devjiwonchoi', 'georges'] })
    expect(info[0]).toHaveProperty('id')
    expect(info[0]).toHaveProperty('username')
  })

  it('should support ids as string', async () => {
    const info = await lichess.users.info({ ids: 'devjiwonchoi,georges' })
    expect(info[0]).toHaveProperty('id')
    expect(info[0]).toHaveProperty('username')
  })

  it('should support ids as string with whitespace', async () => {
    const info = await lichess.users.info({ ids: 'devjiwonchoi, georges' })
    expect(info[0]).toHaveProperty('id')
    expect(info[0]).toHaveProperty('username')
  })
})

describe('users.status()', () => {
  it('should support ids as string[]', async () => {
    const status = await lichess.users.status({
      ids: ['devjiwonchoi', 'georges'],
    })
    expect(status[0]).toHaveProperty('id')
    expect(status[0]).toHaveProperty('name')
  })

  it('should support ids as string', async () => {
    const status = await lichess.users.status({ ids: 'devjiwonchoi,georges' })
    expect(status[0]).toHaveProperty('id')
    expect(status[0]).toHaveProperty('name')
  })

  it('should support ids as string with whitespace', async () => {
    const status = await lichess.users.status({ ids: 'devjiwonchoi, georges' })
    expect(status[0]).toHaveProperty('id')
    expect(status[0]).toHaveProperty('name')
  })
})

describe('users.crosstable()', () => {
  it('should get crosstable', async () => {
    const crosstable = await lichess.users.crosstable({
      user1: 'devjiwonchoi',
      user2: 'georges',
    })
    expect(crosstable).toHaveProperty('users')
    expect(crosstable).toHaveProperty('nbGames')
  })
})

describe('users.streaming()', () => {
  it('should get streaming users', async () => {
    const streaming = await lichess.users.streaming()
    expect(streaming.every((user: any) => user.hasOwnProperty('id'))).toBe(true)
  })
})

describe('users.leaderboard.info()', () => {
  it('should get string[] of users in the given leaderboard', async () => {
    const info = await lichess.users.leaderboard.info({
      nb: 10,
      perfType: 'bullet',
    })
    expect(info).toHaveProperty('users')
  })
})

describe('users.leaderboard.topTens()', () => {
  it('should get top 10 users per leaderboard', async () => {
    const topTens = await lichess.users.leaderboard.topTens()
    expect(topTens).toHaveProperty('bullet')
    expect(topTens).toHaveProperty('blitz')
  })
})
