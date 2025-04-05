import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  // TODO: Lichess OpenAPI endpoint
  input: './src/openapi.json',
  output: './src/client/',
  plugins: ['@hey-api/client-fetch'],
})
