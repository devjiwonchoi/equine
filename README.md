# equine 🐴

Minimal Lichess API client for Node.js — a fully-typed SDK generated from the
[Lichess OpenAPI specification](https://github.com/lichess-org/api).

> [!NOTE]
> Authenticated endpoints require a Lichess API token.
> [Generate one here](https://lichess.org/account/oauth/token).

## Install

```sh
pnpm add equine
```

## Usage

Set `LICHESS_API_TOKEN` in your environment and call any endpoint — the token
is detected automatically:

```ts
import { accountMe } from 'equine'

const res = await accountMe()
console.log(res.data?.username)
```

Public endpoints (user profiles, TV, tournaments, tablebase, …) work with no
token at all.

### Providing the token manually

```ts
import { setToken, accountMe } from 'equine'

setToken(process.env.LICHESS_API_TOKEN)
const res = await accountMe()
```

`setToken()` can be called at runtime to switch accounts, or with no argument
to clear the token.

## API reference

Every Lichess endpoint is exposed as a named function (`accountMe`,
`apiUsersStatus`, `challengeCreate`, …), fully typed with inline docs from the
spec. See the [Lichess API documentation](https://lichess.org/api) for endpoint
details.

## How it stays current

Equine's client is generated from Lichess's upstream OpenAPI spec by
[`@hey-api/openapi-ts`](https://heyapi.dev). A scheduled GitHub Action
regenerates it and opens a PR whenever the spec changes — nothing is vendored
or hand-maintained.
