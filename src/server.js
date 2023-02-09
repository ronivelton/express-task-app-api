import express from 'express'
import { mongooseConnect } from './database/mongoose'

const PORT = process.env.PORT || 3333
const server = express()

mongooseConnect()

server.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(PORT, () => {
  console.log(`Starting server in port: ${PORT}`)
})
