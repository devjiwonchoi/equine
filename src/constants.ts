const LICHESS_TEST_API_URL =
  process.env.NODE_ENV === 'test' && 'https://lichess.dev/api'

export const LICHESS_API_URL = LICHESS_TEST_API_URL || 'https://lichess.org/api'
