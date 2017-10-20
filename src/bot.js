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

// Instantiate Recast.AI SDK
const client = new recastai(process.env.REQUEST_TOKEN)

/*
 * Callback for BotConnector messages
 * Parameters:
 * - message: Message received from BotConnector
 */
const replyMessage = message => {
  // Get text from message received
  const text = message.content
  console.log('I receive: ', text)

  return client.request.analyseText(text)
    .then(nlp => {
      let reply = 'I\'m sorry but I don\'t understand what you are talking about.'
      const intent = nlp.intent()

      if (intent) {
        reply = `I understand that you talk about ${intent.slug}.`
      }

      message.addReply({ type: 'text', content: reply })

      return message.reply().then(p => p.body)
    })
}

/*
 * Main bot function
 * Parameters are:
 * - body: Request body
 * - response: Response of your server (can be a blank object if not needed: {})
 */
const reply = (request, response) => {
  return client.connect.handleMessage(request, response, replyMessage)
}

module.exports = {
  reply,
}
