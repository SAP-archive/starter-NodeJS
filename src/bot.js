/*
 * bot.js
 * In this file, received message will be transformed with Recast.AI SDK
 *
 * The Recast.AI SDK will handle message and call your reply bot function
 */

/*
 * Import dependencies
 */
const RecastAI = require('recastai')

/*
 * Import configs
 */
const config = require('./config')
const recast = config.recast

/*
 * Import your reply bot function
 */
const message = require('./messages')

/*
 * Instantiate Recast.AI SDK, just for connect service
 */
const connect = new RecastAI.connect(recast.token)

/*
 * Main bot function
 */
const bot = (request, response) => {
  /*
   * Call the Recast.AI SDK function to handle message
   * This function will:
   * - Return a response with the status code 200
   * - Create a Message object, easy usable in your code
   * - Call the 'replyMessage' function, with this Message object in parameter
   */
  connect.connect.handleMessage(request, response, message.replyMessage)
}

module.exports = bot
