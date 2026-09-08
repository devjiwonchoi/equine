export * from './client'
import { client } from './client/client.gen'

/**
 * Apply a Lichess API token to the shared client. Public endpoints work
 * without one; authenticated endpoints need it. Passing an empty/undefined
 * token clears the Authorization header.
 */
export const setToken = (apiToken?: string) => {
  client.setConfig({
    // hey-api's mergeHeaders deletes a header only on an explicit `null`;
    // an empty object would leave a previously-set token in place.
    headers: { Authorization: apiToken ? `Bearer ${apiToken}` : null },
  })
}

// Zero-config: auto-detect the token from the environment on load, so
// `import { accountMe } from 'equine'` just works in Node. Call setToken()
// to override, supply it manually, or switch accounts at runtime.
const envToken =
  typeof process !== 'undefined' ? process.env?.LICHESS_API_TOKEN : undefined

if (envToken) {
  setToken(envToken)
}
