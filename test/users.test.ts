import { client } from './test-utils'

describe('users.info()', () => {
  it('should support ids as string[]', async () => {
    const res = await client.users.info({ ids: ['devjiwonchoi', 'georges'] })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })

  it('should support ids as string', async () => {
    const res = await client.users.info({ ids: 'devjiwonchoi,georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })

  it('should support ids as string with whitespace', async () => {
    const res = await client.users.info({ ids: 'devjiwonchoi, georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })
})

describe('users.status()', () => {
  it('should support ids as string[]', async () => {
    const res = await client.users.status({ ids: ['devjiwonchoi', 'georges'] })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })

  it('should support ids as string', async () => {
    const res = await client.users.status({ ids: 'devjiwonchoi,georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })

  it('should support ids as string with whitespace', async () => {
    const res = await client.users.status({ ids: 'devjiwonchoi, georges' })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })
})