import pages from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    pages(),
    devServer({
      entry: 'src/index.tsx',
    }),
    tsConfigPaths(),
  ],
})
