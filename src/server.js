import express from 'express'
import bodyParser from 'body-parser'

import { bot } from './bot'
import { port } from './config'

// Server setup
const app = express()
app.set('port', port || 5000)
app.use(bodyParser.json())
app.use('/', (req, res) => {
  // Send back a 200 to BotConnector
  res.status(200).send()
  bot(req.body)
})
app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
