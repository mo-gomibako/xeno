import type { Config } from 'drizzle-kit'
import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config()

export default {
  schema: './src/schema.ts',
  out: './drizzle',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: resolve(__dirname, 'wrangler.toml'),
    dbName: process.env.DB_NAME!,
  },
} satisfies Config
