/*
 * bot.js
 *
 * In this file:
 * - received message from a connected channel will be transformed with Recast.AI SDK
 * - received message from test command will be processed by Recast.AI
 *   You can run this command for testing:
 *   curl -X "POST" "http://localhost:5000" -d '{"text": "YOUR_TEXT"}' -H "Content-Type: application/json; charset=utf-8"
 *
 *
 * The Recast.AI SDK will handle the message and call your reply bot function (ie. replyMessage function)
 */

const recastai = require('recastai').default

const replyMessage = require('./message')

// Instantiate Recast.AI SDK
const client = new recastai(process.env.REQUEST_TOKEN)

/*
 * Main bot function
 * Parameters are:
 * - body: Request body
 * - response: Response of your server (can be a blank object if not needed: {})
 * - callback: Callback is a function called by Recast.AI hosting system when your code will be hosted
 */
export const bot = (body, response, callback) => {
  if (body.message) {
    /*
    * Call the Recast.AI SDK function to handle message from Bot Connector
    * This function will:
    * - Return a response with the status code 200
    * - Create a Message object, easily usable in your code
    * - Call the 'replyMessage' function, with this Message object in parameter
    *
    * If you want to edit the behaviour of your code bot, depending on user input,
    * go to /src/message.js file and write your own code under "YOUR OWN CODE" comment.
    */
    client.connect.handleMessage({ body }, response, replyMessage)

    /*
     * This function is called by Recast.AI hosting system when your code will be hosted
     */
    callback(null, { result: 'Bot answered :)' })
  } else if (body.text) {
    /*
    * If your request comes from the testing route
    * ie curl -X "POST" "https://localhost:5000" -d '{"text": "YOUR_TEXT"}' -H "Content-Type: application/json; charset=utf-8"
    * It just sends it to Recast.AI and returns replies
    */
    client.request.converseText(body.text, { conversationToken: process.env.CONVERSATION_TOKEN || null })
      .then((res) => {
        if (res.reply()) {
          /*
           * If response received from Recast.AI contains a reply
           */
          callback(null, {
            reply: res.reply(),
            conversationToken: res.conversationToken,
          })
        } else {
          /*
           * If response received from Recast.AI does not contain any reply
           */
          callback(null, {
            reply: 'No reply :(',
            conversationToken: res.conversationToken,
          })
        }
      })
      .catch((err) => {
        callback(err)
      })
  } else {
    callback('No text provided')
  }
}
