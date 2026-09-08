import { defineConfig } from '@hey-api/openapi-ts'

// Lichess authors its OpenAPI spec as multiple YAML files stitched with $refs
// (https://github.com/lichess-org/api). Cross-file $refs (e.g. Flair) cannot be
// resolved by fetching the entry file alone, so `pnpm bundle` uses Redocly to
// pull the upstream spec into a single self-contained `openapi.bundled.yaml`
// first. Nothing is vendored — the bundle is generated and gitignored.
export default defineConfig({
  input: process.env.OPENAPI_SPEC ?? './openapi.bundled.yaml',
  output: './src/client/',
  plugins: ['@hey-api/client-fetch'],
})
