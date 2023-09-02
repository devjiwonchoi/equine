import { client } from './test-utils'

describe('users.', () => {
  it('should get users', async () => {
    const res = await client.users.users({ ids: ['devjiwonchoi', 'georges'] })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('username')
  })

  it('should get users status', async () => {
    const res = await client.users.users({
      ids: ['devjiwonchoi', 'georges'],
      statusOnly: true,
    })
    const data = await res.json()
    expect(data[0]).toHaveProperty('id')
    expect(data[0]).toHaveProperty('name')
  })
})
