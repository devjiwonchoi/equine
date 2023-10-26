import { lichess } from './test-utils'

describe('bot.online()', () => {
  it('should be able to get online bots', async () => {
    const online = await lichess.bot.online()
    expect(online).toHaveProperty('id')
  })
  it('should be able to get online bots with a limit', async () => {
    const online = await lichess.bot.online({ nb: 10 })
    expect(online.length).toBe(10)
  })
})
