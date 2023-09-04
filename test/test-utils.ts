import 'dotenv/config'
import { Client } from '../src/client'

export const client = new Client(process.env.LICHESS_TOKEN!)

export const aiChallengeId = async () => {
  const res = await client.challenge.ai({
    level: 1,
    color: 'white',
    variant: 'standard',
  })
  const data = await res.json()
  return data.id as string
}

export const abortAiChallenge = async (gameId: string) => {
  await client.board.abort(gameId)
}

