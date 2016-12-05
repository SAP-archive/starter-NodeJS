import express from 'express'
import config from '../config/index.js'
import bodyParser from 'body-parser'

const app = express()
app.set('port', config.port || 5000)
app.use(bodyParser.json())

app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
