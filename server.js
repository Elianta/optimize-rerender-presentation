require('dotenv').config()

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = parseInt(process.env.PORT || '3000', 10)

;(async () => {
  await app.prepare()
  const server = express()

  server.use(express.static('public', { maxAge: '365d' }))

  server.enable('trust proxy')
  server.get('*', async (req, res) => {
    handle(req, res)
  })

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`)
})()
