export async function fetcher({
  url,
  token,
  method,
}: {
  url: string
  token: string
  method: 'GET' | 'POST'
}) {
  return (
    await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        method,
      },
    })
  ).json()
}
