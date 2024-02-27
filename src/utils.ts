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
  try {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: post ? 'POST' : 'GET',
      body,
    }
    const response = await fetch(`${LICHESS_API_URL}${endpoint}`, fetchOptions)
    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}
