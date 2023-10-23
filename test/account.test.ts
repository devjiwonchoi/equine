import { client } from './test-utils'

describe('profile()', () => {
  it('should get account profile', async () => {
    const profile = await client.account.profile()
    expect(profile).toHaveProperty('id')
    expect(profile).toHaveProperty('username')
  })
})

describe('email()', () => {
  it('should get account email', async () => {
    const email = await client.account.email()
    expect(email).toHaveProperty('email')
  })
})

describe('preferences()', () => {
  it('should get account preferences', async () => {
    const preferences = await client.account.preferences()
    expect(preferences).toHaveProperty('prefs')
  })
})

describe('kidMode()', () => {
  it('should get kid mode status', async () => {
    const kidMode = await client.account.kidMode()
    expect(kidMode).toHaveProperty('kid')
  })

  it('should enable kid mode', async () => {
    await client.account.kidMode({ enable: true })
    const kidMode = await client.account.kidMode()
    expect(kidMode.kid).toBe(true)
  })

  it('should disable kid mode', async () => {
    await client.account.kidMode({ enable: false })
    const kidMode = await client.account.kidMode()
    expect(kidMode.kid).toBe(false)
  })
})

describe('challenges()', () => {
  it('should get challenges', async () => {
    const challenges = await client.account.challenges()
    expect(challenges).toHaveProperty('in')
    expect(challenges).toHaveProperty('out')
  })
})

describe('ongoing()', () => {
  it('should get ongoing games', async () => {
    const ongoing = await client.account.ongoing()
    expect(ongoing).toHaveProperty('nowPlaying')
  })

  it('should get ongoing games with limit', async () => {
    const ongoing = await client.account.ongoing({ limit: 1 })
    expect(ongoing).toHaveProperty('nowPlaying')
  })
})

describe('following()', () => {
  it('should get following users', async () => {
    const following = await client.account.following()
    expect(following).toHaveProperty('id')
  })
})