// import for async await compatibilty when build and serve lib with node
// it's already contained in babel-cli -> babel-register && babel-polyfill
import 'babel-polyfill'

import mongoose from 'mongoose'
import botconnector from 'recastai-botconnector'

import { mongo, connector } from './config'
import { handleMessage } from './messages'

// BotConnector setup
const myBot = new botconnector(connector)

// When the bot receive a message...
myBot.onTextMessage(handleMessage)

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
  myBot.listen(req)
}
