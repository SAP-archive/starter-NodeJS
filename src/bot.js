/*
 * bot.js
 * In this file, received message will be transformed with Recast.AI SDK
 *
 * The Recast.AI SDK will handle message and call your reply bot function
 */

const recastai = require('mandre').default
const config = require('./config')

const replyMessage = require('./message')

// Instantiate Recast.AI SDK
const client = new recastai(config.recast.token)

/*
 * Main bot function
 * It takes body of the request
 * And optionally, the response object of your server
 */
export const bot = (body, response, callback) => {
  if (body.message) {
    /*
    * Call the Recast.AI SDK function to handle message from Bot Connector
    * This function will:
    * - Return a response with the status code 200
    * - Create a Message object, easy usable in your code
    * - Call the 'replyMessage' function, with this Message object in parameter
    */
    client.connect.handleMessage({ body }, response, replyMessage)
  } else if (body.text) {
    /*
    * If your request come from testing route
    * ie curl -X POST https://run.recast.ai/{userslug}-{botslug}
    * It just sends it to Recast.AI and returns replies
    */
    client.request.converseText(body.text, { conversationToken: process.env.CONVERSATION_TOKEN || null })
      .then((res) => {
        callback(null, {
          reply: res.reply(),
          conversationToken: res.conversationToken,
        })
      })
      .catch((err) => {
        callback(err)
      })
  } else {
    callback('No text provided')
  }
}
