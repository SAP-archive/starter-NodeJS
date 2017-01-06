import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Bot from 'recastai-botconnector'

import {
  BotConnectorConfig,
} from '../config/index'


// BotConnector setup
const bot = new Bot(BotConnectorConfig)


// Server setup
const app = express()
app.set('port', config.port || 5000)
app.use(bodyParser.json())
app.use('/', (req, res) => bot.listen(req, res))


// When the bot receive a message...
bot.onTextMessage(message => {
  console.log(message)
})


// MongoDB connection
let db = 'mongodb://'
if (config.database.username) { db = `${db}${config.database.username}:${config.database.password}@` }
db = `${db}${config.database.hostname}:${config.database.port}/${config.database.name}`
if (config.database.ssl) { db = `${db}?ssl=${config.database.ssl}` }
mongoose.connect(db, err => {
  if (err) {
    console.error('An error occured while connecting to MongoDB')
    throw err
  }

  app.listen(app.get('port'), () => {
    console.log('Our bot is running on port', app.get('port'))
  })
})

