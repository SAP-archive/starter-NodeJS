/*
 * server.js
 * This file is the core of your bot
 *
 * It creates a little server using express
 * So, your bot can be triggered thought "/" route
 */

 /*
  * Import dependencies
  */
const express = require('express')
const bodyParser = require('body-parser')

/*
 * Import config
 */
const config = require('./config')

/*
 * Import main bot function
 */
const bot = require('./bot')

/*
 * Start Express server
 */
const app = express()

/*
 * Set Express server port variable
 */
app.set('port', config.port || 5000)

/*
 * Use body-parser to parse request body
 */
app.use(bodyParser.json())

/*
 * Handle / route
 */
app.use('/', (request, response) => {
  /*
   * Call bot main function
   */
  bot.bot(request, response)
})

/*
 * Run Express server, on right port
 */
app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
