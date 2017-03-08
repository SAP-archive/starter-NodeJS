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
const { recast } = require('./config')

/*
 * Import your reply bot function
 */
const replyMessage = require('./message')

/*
 * Instantiate Recast.AI SDK, just for connect service
 */
const connect = new RecastAI.connect(recast.token)

/*
 * Main bot function
 * It takes body of the request
 * And optionally, the response object of your server
 */
const bot = (body, response) => {
  /*
   * Call the Recast.AI SDK function to handle message from BotConnector
   * This function will:
   * - Return a response with the status code 200
   * - Create a Message object, easy usable in your code
   * - Call the 'replyMessage' function, with this Message object in parameter
   */
  connect.connect.handleMessage({ body }, response, replyMessage)
}

module.exports = bot
