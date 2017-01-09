import { Client } from 'recastai'
import { recast } from '../config'

const recastClient = new Client(recast.token, recast.language)

export async function handleMessage (message) {
  try {
    const text = message.content.attachment.content
    const { senderId } = message
    const res = await recastClient.textConverse(text, { conversationId: senderId })

    res.replies.forEach(content => message.addReply({ type: 'text', content }))

    await message.reply()
  } catch (err) {
    console.error('An error occured while handling message', err)
  }

}
