import 'dotenv/config'
import { initialize, accountMe } from '../src'

// The live test hits the real Lichess API and needs a personal token, so it is
// opt-in: set LICHESS_API_TOKEN to run it. CI leaves the token unset, so this
// suite is skipped and stays green.
const token = process.env.LICHESS_API_TOKEN
const describeLive = token ? describe : describe.skip

describeLive('live: account', () => {
  beforeAll(() => {
    initialize(token!)
  })

  it('accountMe returns the authenticated username', async () => {
    const res = await accountMe()
    expect(res.data?.username).toBeTruthy()
  })
})

describe('initialize', () => {
  it('throws when no token is provided', () => {
    expect(() => initialize('')).toThrow()
  })
})
