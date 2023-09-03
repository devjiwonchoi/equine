import { client } from './test-utils'

describe('Challenge', () => {
  it('should list challenges', async () => {
    const res = await client.challenge.list()
    expect(res.status).toBe(200)
  })
  it('should create and cancel a challenge', async () => {
    const res = await client.challenge.create('LeelaChess')
    const data = await res.json()
    const res2 = await client.challenge.cancel(data.challenge.id)
    const data2 = await res2.json()
    expect(data.challenge).toHaveProperty('id')
    expect(data2.ok).toBe(true)
  })
  it('should create an AI challenge', async () => {
    const res = await client.challenge.ai({
      level: 1,
      days: 1,
      color: 'random',
      variant: 'standard',
    })
    const data = await res.json()
    expect(data).toHaveProperty('id')
  })
  it('should create an open challenge', async () => {
    const res = await client.challenge.open({
      rated: true,
      clockLimit: 10 * 60,
      clockIncrement: 0,
      name: 'An open challenge created by devjiwonchoi/equine',
      variant: 'standard',
    })
    const data = await res.json()
    expect(data.challenge).toHaveProperty('id')
  })
})
