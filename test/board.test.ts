import { client, aiChallengeId, abortAiChallenge } from './test-utils'

describe('board.move()', () => {
  it('should move a piece', async () => {
    const challengeId = await aiChallengeId()
    const res = await client.board.move({
      gameId: challengeId,
      move: 'e2e4',
    })
    const data = await res.json()
    expect(data.ok).toBe(true)

    abortAiChallenge(challengeId)
  })
})
