import { LICHESS_API_URL } from './constants'

export async function fetcher({
  endpoint,
  token,
  post,
  body,
}: {
  endpoint: string
  token: string
  post?: boolean
  body?: URLSearchParams
}) {
  return (
    await fetch(`${LICHESS_API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: post ? 'POST' : 'GET',
      body,
    })
  ).json()
}
