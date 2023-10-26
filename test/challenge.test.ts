import { client } from './test-utils'

describe('Challenge', () => {
  it('should create and cancel a challenge', async () => {
    const create = await client.challenge.create({ username: 'LeelaChess' })
    expect(create.challenge).toHaveProperty('id')

    const cancel = await client.challenge.cancel({
      challengeId: create.challenge.id,
    })
    expect(cancel.ok).toBe(true)
  })
  it('should create an AI challenge', async () => {
    const ai = await client.challenge.ai({
      level: 1,
      days: 1,
      color: 'random',
      variant: 'standard',
    })
    expect(ai).toHaveProperty('id')
  })
  it('should create an open challenge', async () => {
    const open = await client.challenge.open({
      rated: true,
      clockLimit: 10 * 60,
      clockIncrement: 0,
      name: 'An open challenge created by devjiwonchoi/equine',
      variant: 'standard',
    })
    expect(open.challenge).toHaveProperty('id')
  })
})
