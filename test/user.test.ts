import { lichess } from './test-utils'

describe('user.info()', () => {
  it('should get user public data', async () => {
    const info = await lichess.user.info({ username: 'devjiwonchoi' })
    expect(info).toHaveProperty('id')
    expect(info).toHaveProperty('username')
  })
})

describe('user.history()', () => {
  it('should get user rating history', async () => {
    const history = await lichess.user.history({ username: 'devjiwonchoi' })
    expect(Array.isArray(history)).toBe(true)
  })
})

describe('user.performance()', () => {
  it('should get user performance', async () => {
    const performance = await lichess.user.performance({
      username: 'devjiwonchoi',
      perfType: 'bullet',
    })
    expect(performance).toHaveProperty('perf')
    expect(performance).toHaveProperty('rank')
  })
})

describe('user.activity()', () => {
  it('should get user activity', async () => {
    const activity = await lichess.user.activity({ username: 'devjiwonchoi' })
    expect(Array.isArray(activity)).toBe(true)
  })
})

describe('user.autocomplete()', () => {
  it('should get string[] of username(s)', async () => {
    const autocomplete = await lichess.user.autocomplete({
      term: 'devjiwon',
    })
    expect(autocomplete).toContain('devjiwonchoi')
  })

  it('should get details of users also', async () => {
    const autocomplete = await lichess.user.autocomplete({
      term: 'devjiwon',
      details: true,
    })
    expect(autocomplete.result).toMatchObject(
      expect.arrayContaining([expect.objectContaining({ id: 'devjiwonchoi' })])
    )
  })

  it('should get string[] of username(s), friends prior', async () => {
    const autocomplete = await lichess.user.autocomplete({
      term: 'devjiwon',
      friendPrior: true,
    })
    expect(autocomplete).toContain('devjiwonchoi')
  })
})

describe('user.note()', () => {
  it('should get user note', async () => {
    const note = await lichess.user.note({
      username: 'devjiwonchoi',
    })
    expect(Array.isArray(note)).toBe(true)
  })

  it('should post user note', async () => {
    const note = await lichess.user.note({
      username: 'devjiwonchoi',
      text: 'test',
    })
    expect(note.ok).toBe(true)
  })
})

describe('user.follow()', () => {
  it('should follow a user', async () => {
    const follow = await lichess.user.follow({ username: 'devjiwonchoi' })
    expect(follow.ok).toBe(true)
  })
})

describe('user.unfollow()', () => {
  it('should unfollow a user', async () => {
    const unfollow = await lichess.user.unfollow({ username: 'devjiwonchoi' })
    expect(unfollow.ok).toBe(true)
  })
})
