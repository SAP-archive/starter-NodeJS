/*
 * message.js
 * This file contains your bot code
 */

const recastai = require('mandre')
const config = require('./config')

// This function is the core of the bot behaviour
const replyMessage = (message) => {

  // Instantiate Recast.AI SDK, just for request service
  const request = new recastai.request(config.recast.token, config.recast.language)

  // Get text from message received
  const text = message.content
  console.log('I receive: ', text)

  // Get senderId to catch unique conversation_token
  const senderId = message.senderId

  // Call Recast.AI SDK, through /converse route
  request.converseText(text, { conversationToken: senderId })
  .then(result => {
    /*
    * Here, you can add your own process.
    * Ex: You can call any external API
    * Or: Update your mongo DB
    * etc...
    */
    if (result.action) {
      console.log('The conversation action is: ', result.action.slug)
    }

    // Add each replies received from API to replies stack
    result.replies.forEach(replyContent => message.addReply({ type: 'text', content: replyContent }))

    // Send all replies
    message.reply()
    .then(() => {
      // Do some code after sending messages
    })
    .catch(err => {
      console.error('Error while sending message to channel', err)
    })
  })
  .catch(err => {
    console.error('Error while sending message to Recast.AI', err)
  })
}

module.exports = replyMessage
