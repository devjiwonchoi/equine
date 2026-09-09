import { defineConfig } from '@hey-api/openapi-ts'

// Lichess authors its OpenAPI spec as multiple YAML files stitched with $refs
// (https://github.com/lichess-org/api). Cross-file $refs (e.g. Flair) cannot be
// resolved by fetching the entry file alone, so `pnpm bundle` (scripts/bundle.mjs)
// uses Redocly to pull the source into a single self-contained
// `openapi.bundled.yaml` first — nothing is vendored, the bundle is gitignored.
// To generate from a different or offline source, set OPENAPI_SPEC to any URL or
// local file: `pnpm bundle` reads it and this input stays the bundled output.
export default defineConfig({
  input: './openapi.bundled.yaml',
  output: './src/client/',
  plugins: ['@hey-api/client-fetch'],
})
