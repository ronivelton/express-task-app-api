import * as dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

export function mongooseConnect () {
  mongoose.connect(`${process.env.MONGO_URL}/express-task-app-db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function () {
    console.log('Connected to MongoDB!')
  })
}
