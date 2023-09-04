import 'dotenv/config'

export const LICHESS_API_URL =
  process.env.LICHESS_DEV_API_URL ?? 'https://lichess.org/api'
