import { Client } from '../src/client'

export const client = new Client(process.env.LICHESS_DEV_TOKEN!)
