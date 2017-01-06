import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Bot from 'recastai-botconnector'

import { port, mongo, connector } from '../config/index'

// BotConnector setup
const bot = new Bot(connector)


// Server setup
const app = express()
app.set('port', port || 5000)
app.use(bodyParser.json())
app.use('/', (req, res) => bot.listen(req, res))


// When the bot receive a message...
bot.onTextMessage(message => {
  console.log(message)
})


// MongoDB connection
let db = 'mongodb://'
if (mongo.username) { db = `${db}${mongo.username}:${mongo.password}@` }
db = `${db}${mongo.hostname}:${mongo.port}/${mongo.name}`
if (mongo.ssl) { db = `${db}?ssl=${mongo.ssl}` }
mongoose.connect(db, err => {
  if (err) {
    console.error('An error occured while connecting to MongoDB')
    throw err
  }

  app.listen(app.get('port'), () => {
    console.log('Our bot is running on port', app.get('port'))
  })
})

