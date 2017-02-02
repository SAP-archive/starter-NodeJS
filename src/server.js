import express from 'express'
import { bot } from './bot'
import bodyParser from 'body-parser'
import { port } from './config'

// Server setup
const app = express()
app.set('port', port || 5000)
app.use(bodyParser.json())
app.use('/', (req, res) => bot(req))
app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})

