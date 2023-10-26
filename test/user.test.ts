import { client } from './test-utils'

describe('user.info()', () => {
  it('should get user public data', async () => {
    const info = await client.user.info({ username: 'devjiwonchoi' })
    expect(info).toHaveProperty('id')
    expect(info).toHaveProperty('username')
  })
})

describe('user.history()', () => {
  it('should get user rating history', async () => {
    const history = await client.user.history({ username: 'devjiwonchoi' })
    expect(Array.isArray(history)).toBe(true)
  })
})

describe('user.performance()', () => {
  it('should get user performance', async () => {
    const performance = await client.user.performance({
      username: 'devjiwonchoi',
      perfType: 'bullet',
    })
    expect(performance).toHaveProperty('perf')
    expect(performance).toHaveProperty('rank')
  })
})

describe('user.activity()', () => {
  it('should get user activity', async () => {
    const activity = await client.user.activity({ username: 'devjiwonchoi' })
    expect(activity[0]).toHaveProperty('interval')
  })
})

describe('user.autocomplete()', () => {
  it('should get string[] of username(s)', async () => {
    const autocomplete = await client.user.autocomplete({
      term: 'devjiwon',
    })
    expect(autocomplete).toContain('devjiwonchoi')
  })

  it('should get details of users also', async () => {
    const autocomplete = await client.user.autocomplete({
      term: 'devjiwon',
      details: true,
    })
    expect(autocomplete.result).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ id: 'devjiwonchoi' })])
    )
  })

  it('should get string[] of username(s), friends prior', async () => {
    const autocomplete = await client.user.autocomplete({
      term: 'devjiwon',
      friendPrior: true,
    })
    expect(autocomplete).toContain('devjiwonchoi')
  })
})

describe('user.note()', () => {
  it('should get user note', async () => {
    const note = await client.user.note({
      username: 'devjiwonchoi',
    })
    expect(Array.isArray(note)).toBe(true)
  })

  it('should post user note', async () => {
    const note = await client.user.note({
      username: 'devjiwonchoi',
      text: 'test',
    })
    expect(note.ok).toBe(true)
  })
})

describe('user.follow()', () => {
  it('should follow a user', async () => {
    const follow = await client.user.follow({ username: 'devjiwonchoi' })
    expect(follow.ok).toBe(true)
  })
})

describe('user.unfollow()', () => {
  it('should unfollow a user', async () => {
    const unfollow = await client.user.unfollow({ username: 'devjiwonchoi' })
    expect(unfollow.ok).toBe(true)
  })
})