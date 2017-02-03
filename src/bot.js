// import for async await compatibilty when build and serve lib with node
// it's already contained in babel-cli -> babel-register && babel-polyfill
import 'babel-polyfill'

import mongoose from 'mongoose'
import BotConnector from 'recastai-botconnector'

import { mongo, connector } from './config'
import { handleMessage } from './messages'

// BotConnector setup
const myBot = new BotConnector(connector)

// When the bot receive a message...
myBot.onTextMessage(handleMessage)

// MongoDB connection
let db = 'mongodb://'
if (mongo.username) { db = `${db}${mongo.username}:${mongo.password}@` }
db = `${db}${mongo.hostname}:${mongo.port}/${mongo.name}`
if (mongo.ssl) { db = `${db}?ssl=${mongo.ssl}` }

// remove deprecation warning from mongoose
mongoose.Promise = global.Promise

export function bot(event) {
  const req = {}
  req.body = event

  mongoose.connect(db, err => {
    if (err) {
      console.error('An error occured while connecting to MongoDB')
      throw err
    } else {
      myBot.listen(req, db)
    }
  })
}
