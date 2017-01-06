import { Client } from 'recastai'
import { recast } from '../config'

const recastClient = new Client(recast.token, recast.language)

export default class Message {
  
  // logic will go here
  static async handleMessage (message) {
    try {
      const text = message.content.attachment.content
      const res = await recastClient.textConverse(text)

      res.replies.forEach(content => message.addReply({ type: 'text', content }))

      await message.reply()
    } catch (err) {
      console.error('An error occured while handling message', err)
    }
  }

}
