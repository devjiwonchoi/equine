import { LICHESS_API_URL } from './constants'

export async function fetcher({
  endpoint,
  token,
  method,
  body,
}: {
  endpoint: string
  token: string
  method?: string
  body?: URLSearchParams
}) {
  return (
    await fetch(`${LICHESS_API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body,
    })
  ).json()
}
