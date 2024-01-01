# Testing

Our tests require the API token from Lichess. Sign up to [https://lichess.dev](https://lichess.dev)

To run a test for a specific API:

```sh
pnpm test -- API_NAME
```

## Writing tests for Equine

Each test files are named after their API. For example, `account.ts` contains tests for `account` API.
