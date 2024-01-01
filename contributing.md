# Contributing to Equine

> Before jumping into a PR be sure to search [existing PRs](https://github.com/devjiwonchoi/equine/pulls) or [issues](https://github.com/devjiwonchoi/equine/issues) for an open or closed item that relates to your submission.

## Developing

To develop locally:

1. Install the [GitHub CLI](https://github.com/cli/cli#installation)
2. Clone the Equine repository (download only recent commits for faster clone):

    ```sh
    gh repo clone devjiwonchoi/equine -- --depth=3000 --branch main --single-branch
    ```

3. Create a new branch:

    ```sh
    git checkout -b MY_BRANCH_NAME origin/main
    ```

4. Enable `pnpm`:
  
    ```sh
    corepack enable pnpm
    ```

5. Install the dependencies with:

    ```sh
    pnpm install
    ```

6. When your changes are finished, commit them to the branch:

    ```sh
    git add .
    git commit -m "DESCRIBE_YOUR_CHANGES_HERE"
    ```

7. To open a pull request you can use the GitHub CLI which automatically forks and sets up a remote branch. Follow the prompts when running:

    ```sh
    gh pr create
    ```

## Building

We use [bunchee](https://github.com/huozhi/bunchee) to build our product. To build locally:

```sh
pnpm build
```

This will generate a `dist` folder with the built files.

## Testing

To run a test for a specific API:

```sh
pnpm test -- API_NAME
```

### Writing tests for Equine

Each test files are named after their API. For example, `account.ts` contains tests for `account` API.

## Adding a new feature

Anyone can propose a change to Equine. However, adding new features often requires community discussions before proceeding with the implementation.

Therefore, before opening a PR, you should use the [Feature Request discussion template](https://github.com/devjiwonchoi/equine/discussions/new?category=ideas) and collect feedback.

## Why use a discussion?

The discussion's goal is to achieve the following:

1. **Verify the validity of the feature request**: The community can upvote discussions. Highly upvoted feature requests are more likely to be considered.
2. **Understanding the consequences**: Any feature added to Equine is likely to be around for a while and _has to be maintained_. This means that a new feature has to cover many use cases, needs to consider how it affects the ecosystem, and so on.
3. **Looking at and understanding historical reasons for the current behavior or lack of the feature**: There might be a reason why a feature does not exist, or why the current implementation is in a certain way. There must be solid reasoning to change this, as the feature needs to be maintained even after it is added. (See 2.). Equine has a strong policy on not breaking features, so any new feature has to be added in a way that makes it possible to incrementally adopt it.
