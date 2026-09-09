#!/usr/bin/env node
// Bundle the OpenAPI spec into a single self-contained file for codegen.
// Lichess authors the spec as multiple YAML files with cross-file $refs, so it
// must be bundled before @hey-api/openapi-ts reads it. Respects OPENAPI_SPEC:
// point it at any URL or local file (e.g. offline / a pinned copy) and that
// source is bundled instead of the live Lichess spec.
import { execFileSync } from 'node:child_process'
import { createRequire } from 'node:module'

const DEFAULT_SPEC =
  'https://raw.githubusercontent.com/lichess-org/api/master/doc/specs/lichess-api.yaml'

const source = process.env.OPENAPI_SPEC ?? DEFAULT_SPEC
const out = 'openapi.bundled.yaml'

// Resolve the locally-installed redocly CLI so this works regardless of PATH.
const require = createRequire(import.meta.url)
const redoclyBin = require.resolve('@redocly/cli/bin/cli.js')

console.log(`Bundling OpenAPI spec from: ${source}`)
execFileSync(process.execPath, [redoclyBin, 'bundle', source, '-o', out], {
  stdio: 'inherit',
})
