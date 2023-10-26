# equine 🐴

> minimal lichess client for node

<p align="left">
  <a href="https://npm.im/equine">
    <img src="https://badgen.net/npm/v/equine">
  </a>

  <a href="https://github.com/devjiwonchoi/equine/actions?workflow=CI">
    <img src="https://github.com/devjiwonchoi/equine/actions/workflows/node_ci.yml/badge.svg">
  </a>
</p>

## Basic Usage

```bash
npm i equine
```

```ts
import { Equine } from 'equine'

const lichess = new Equine('LICHESS_API_TOKEN')

// Returns the info of the account who owns the token
const accountInfo = await lichess.account.info()
```

## Documentation

See [Equine Docs](https://equine.vercel.app) for more information.
