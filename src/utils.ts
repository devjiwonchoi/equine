import { LICHESS_API_URL } from './constants'

export async function fetcher({
  endpoint,
  token,
  method = 'GET',
  body,
}: {
  endpoint: string
  token: string
  method?: string
  body?: URLSearchParams
}) {
  try {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body,
    }
    const response = await fetch(`${LICHESS_API_URL}${endpoint}`, fetchOptions)
    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
