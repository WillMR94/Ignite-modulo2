import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

const port = env.PORT

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`HTTP Server Running in PORT ${port}`)
  })