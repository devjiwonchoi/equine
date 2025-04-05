import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './src/openapi.json',
  output: './src/client/',
  plugins: ['@hey-api/client-fetch'],
})
