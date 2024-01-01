export const LICHESS_API_URL = `https://lichess.${
  process.env.NODE_ENV === 'test' ? 'dev' : 'org'
}/api`
