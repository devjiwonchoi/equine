import { client } from './test-utils'

describe('account.profile()', () => {
  it('should get account profile', async () => {
    const res = await client.account.profile()
    const data = await res.json()
    expect(data).toHaveProperty('id')
    expect(data).toHaveProperty('username')
  })
})

describe('account.email()', () => {
  it('should get account email', async () => {
    const res = await client.account.email()
    const data = await res.json()
    expect(data).toHaveProperty('email')
  })
})

describe('account.preferences()', () => {
  it('should get account preferences', async () => {
    const res = await client.account.preferences()
    const data = await res.json()
    expect(data).toHaveProperty('prefs')
  })
})

describe('account.kidMode()', () => {
  it('should get kid mode status', async () => {
    const res = await client.account.kidMode()
    const data = await res.json()
    expect(data).toHaveProperty('kid')
    expect.extend({
      toBeBoolean({ kid }) {
        const pass = typeof kid === 'boolean'
        if (pass) {
          return {
            message: () => `expected ${kid} to be boolean`,
            pass: true,
          }
        } else {
          return {
            message: () => `expected ${kid} to be boolean`,
            pass: false,
          }
        }
      },
    })
  })

  it('should enable kid mode', async () => {
    const res = await client.account.kidMode(true)
    const data = await res.json()
    expect(data).toHaveProperty('ok')
    expect(data.ok).toBe(true)

    const kidMode = await client.account.kidMode()
    const kidModeData = await kidMode.json()
    expect(kidModeData.kid).toBe(true)
  })

  it('should disable kid mode', async () => {
    const res = await client.account.kidMode(false)
    const data = await res.json()
    expect(data).toHaveProperty('ok')
    expect(data.ok).toBe(true)

    const kidMode = await client.account.kidMode()
    const kidModeData = await kidMode.json()
    expect(kidModeData.kid).toBe(false)
  })
})

describe('account.ongoing()', () => {
  it('should get ongoing games', async () => {
    const res = await client.account.ongoing()
    const data = await res.json()
    expect(data).toHaveProperty('nowPlaying')
  })
})

describe('account.following()', () => {
  it('should get following users', async () => {
    const res = await client.account.following()
    expect(res.status).toBe(200)
  })
})