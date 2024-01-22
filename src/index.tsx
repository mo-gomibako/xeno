import { Hono } from 'hono'
import { renderer } from './renderer'
import { drizzle } from 'drizzle-orm/d1'
import { users } from '@/schema'

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})

app.get('/query/users', async (c) => {
  const db = drizzle(c.env.DB)
  const result = await db.select().from(users).all()
  return Response.json(result)
})

export default app
