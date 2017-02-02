import mongoose from 'mongoose'
import Bot from 'recastai-botconnector'

import { mongo, connector } from './config'
import { handleMessage } from './messages'

// BotConnector setup
const bot = new Bot(connector)

// When the bot receive a message...
bot.onTextMessage(handleMessage)

// MongoDB connection
let db = 'mongodb://'
if (mongo.username) { db = `${db}${mongo.username}:${mongo.password}@` }
db = `${db}${mongo.hostname}:${mongo.port}/${mongo.name}`
if (mongo.ssl) { db = `${db}?ssl=${mongo.ssl}` }

// remove deprecation warning from mongoose
mongoose.Promise = global.Promise

mongoose.connect(db, err => {
  if (err) {
    console.error('An error occured while connecting to MongoDB')
    throw err
  }
})

export function bot(event) {
  const req = {}
  req.body = event
  console.log(req)
  bot.listen(req)
}
