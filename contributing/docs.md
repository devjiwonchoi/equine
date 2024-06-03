# Contributing to Documentation

We use [Nextra](https://github.com/shuding/nextra) to build our documentation. To develop locally:

```sh
cd docs
pnpm install
pnpm dev
```

The basic behavior of Nextra is Next.js with MDX. You can learn more about it in the [Nextra Docs](https://nextra.site/docs/docs-theme/start).

To add a new page, create a new `.mdx` file in the `docs` folder. The file name will be the URL path. For example, `docs.md` will be `/docs`.

## Writing docs for Equine

Each docs files are named after their API. For example, `account.mdx` contains docs for `account` API.
