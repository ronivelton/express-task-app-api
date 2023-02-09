import express from 'express'

const server = express()
const PORT = process.env.PORT || 3333

server.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(PORT, () => {
  console.log(`Starting server in port: ${PORT}`)
})
