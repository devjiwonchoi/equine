import { LICHESS_API_URL } from './constants'

export async function fetcher({
  endpoint,
  token,
  post,
}: {
  endpoint: string
  token: string
  post?: boolean
}) {
  return (
    await fetch(`${LICHESS_API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: post ? 'POST' : 'GET',
    })
  ).json()
}
