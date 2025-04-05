# equine 🐴

> [!NOTE]
> Equine follows the OpenAPI Specification provided by [Lichess API](https://lichess.org/api), and requires its API Token.
>
> [Generate Lichess API Token](https://lichess.org/account/oauth/token)

```ts
import { initialize, accountMe } from 'equine'

// Initialize once with your Lichess API token.
initialize(process.env.LICHESS_API_TOKEN!)

const res = await accountMe()
console.log(res.data?.username)
```

For detailed information on specific APIs, see the [API References](https://github.com/devjiwonchoi/equine/blob/main/src/client/sdk.gen.ts).
