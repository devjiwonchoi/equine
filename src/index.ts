export * from './client'
import { client } from './client/client.gen'

export const initialize = (apiToken: string) => {
  if (!apiToken) {
    throw new Error(
      "Lichess API token is not set. If you don't have one, generate from https://lichess.org/account/oauth/token.\n" +
        'For more information, see https://github.com/lichess-org/api/blob/master/example/README.md.',
    )
  }

  client.setConfig({
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  })
}
