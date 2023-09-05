import { client } from './test-utils'

describe('bot.online()', () => {
  it('should be able to get online bots', async () => {
    const response = await client.bot.online()
    expect(response.status).toBe(200)
  })
  it('should be able to get online bots with a limit', async () => {
    const response = await client.bot.online(10)
    expect(response.status).toBe(200)
  })
})