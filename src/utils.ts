import { LICHESS_API_URL } from './constants'

export async function fetcher({
  endpoint,
  token,
  method = 'get',
  json = true,
  body,
}: {
  endpoint: string
  token: string
  method?: string
  json?: boolean
  body?: URLSearchParams
}) {
    let res = await fetch(`${LICHESS_API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body,
    })
    if (json) {
        return res.json()
    } else {
        return res
    }
}
