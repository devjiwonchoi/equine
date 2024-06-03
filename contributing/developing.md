# Developing

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
