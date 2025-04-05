# equine 🐴

> Minimal Lichess API Client for Node.js

<p align="left">
  <a href="https://npm.im/equine">
    <img src="https://badgen.net/npm/v/equine">
  </a>

  <a href="https://github.com/devjiwonchoi/equine/actions?workflow=CI">
    <img src="https://github.com/devjiwonchoi/equine/actions/workflows/build_and_test.yml/badge.svg">
  </a>
</p>

```ts
import { initialize, accountMe } from 'equine'

initialize(process.env.LICHESS_API_TOKEN!)

const res = await accountMe()
console.log(res.data?.username)
```

## Documentation

Visit [https://equine.vercel.app](https://equine.vercel.app) to view the full documentation.
