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
    expect(Array.isArray(data)).toBe(true)
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

  it('should get string[] of username(s), friends prior', async () => {
    const res = await client.user.autocomplete({
      term: 'devjiwon',
      friendPrior: true,
    })
    const data = await res.json()
    expect(data).toContain('devjiwonchoi')
  })
})

describe('user.note()', () => {
  it('should get user note', async () => {
    const res = await client.user.note({
      username: 'devjiwonchoi',
    })
    const data = await res.json()
    expect(Array.isArray(data)).toBe(true)
  })

  it('should post user note', async () => {
    const res = await client.user.note({
      username: 'devjiwonchoi',
      text: 'test',
    })
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('user.follow()', () => {
  it('should follow a user', async () => {
    const res = await client.user.follow('devjiwonchoi')
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})

describe('user.unfollow()', () => {
  it('should unfollow a user', async () => {
    const res = await client.user.unfollow('devjiwonchoi')
    const data = await res.json()
    expect(data.ok).toBe(true)
  })
})