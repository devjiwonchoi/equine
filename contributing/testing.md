# Testing

Our tests require the API token from Lichess. Sign up to [https://lichess.dev](https://lichess.dev) and create an API token from [https://lichess.dev/account/oauth/token](https://lichess.dev/account/oauth/token), then create a `.env` file in the root directory of the project and add the following:

```sh
# .env
LICHESS_TOKEN=YOUR_TOKEN
```

To run a test for a specific API:

```sh
pnpm test -- API_NAME
```

## Writing tests for Equine

Each test files are named after their API. For example, `account.ts` contains tests for `account` API.
