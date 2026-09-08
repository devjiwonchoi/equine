import 'dotenv/config'
import { setToken, accountMe } from '../src'

// The live test hits the real Lichess API and needs a personal token, so it is
// opt-in: set LICHESS_API_TOKEN (and optionally LICHESS_USERNAME) to run it.
// CI leaves the token unset, so this suite is skipped and stays green.
const token = process.env.LICHESS_API_TOKEN
const describeLive = token ? describe : describe.skip

describeLive('live: account', () => {
  beforeAll(() => {
    setToken(token!)
  })

  it('accountMe returns the authenticated username', async () => {
    const res = await accountMe()
    expect(res.data?.username).toBeTruthy()

    const expected = process.env.LICHESS_USERNAME
    if (expected) {
      expect(res.data?.username?.toLowerCase()).toBe(expected.toLowerCase())
    }
  })
})

describe('setToken', () => {
  it('is exported and callable without throwing', () => {
    expect(typeof setToken).toBe('function')
    expect(() => setToken('test-token')).not.toThrow()
    expect(() => setToken()).not.toThrow() // clearing is allowed
  })

  it('sets then actually clears the Authorization header', async () => {
    const { client } = await import('../src/client/client.gen')

    setToken('abc123')
    expect(new Headers(client.getConfig().headers).get('Authorization')).toBe(
      'Bearer abc123',
    )

    setToken() // clear
    expect(
      new Headers(client.getConfig().headers).get('Authorization'),
    ).toBeNull()
  })
})
