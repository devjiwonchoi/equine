import 'dotenv/config'
import { initialize, accountMe } from '../src'

initialize(process.env.LICHESS_API_TOKEN!)

it('should work', async () => {
  const res = await accountMe()
  expect(res.data?.username).toBe('devjiwonchoi')
})
