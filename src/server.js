/*
 * server.js
 * This file is the core of your bot
 *
 * It creates a little server using express
 * So, your bot can be triggered thought "/" route
 */

const express = require('express')
const bodyParser = require('body-parser')

const config = require('./config')
const bot = require('./bot').bot

// Start Express server
const app = express()
app.set('port', config.port || 5000)
app.use(bodyParser.json())

// Handle / route
app.use('/', (request, response) => {

  // Call bot main function
  bot(request.body, response, (error, success) => {
    if (error) {
      console.log('Error in your bot:', error)
      response.sendStatus(400)
    } else if (success) {
      console.log(success)
      response.status(200).json(success)
    }
  })

})

// Run Express server, on right port
app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
