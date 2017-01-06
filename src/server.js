import express from 'express'
import bodyParser from 'body-parser'

import Bot from 'recastai-botconnector'

import config from '../config/index.js'
import {
  BotConnectorConfig,
} from '../config/index.js'

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
app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
