import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: './src/future/openapi.json',
  output: 'src/client',
  plugins: ['@hey-api/client-fetch'],
})
