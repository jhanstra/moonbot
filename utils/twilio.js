import { log, error } from './log'
import { subscribers } from '../settings'
const twilio = require('twilio')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = new twilio(accountSid, authToken)
const twilioNumber = '+15123776814'

const sendToAllSubscribers = (message) => {
  return subscribers.map(subscriber => sendSms(subscriber.phone, message))
}

const sendSms = async (subscriber, message) => {
  let sms
  try {
    sms = await client.messages.create({
      body: message,
      to: subscriber,
      from: twilioNumber
    })
  } catch (e) { error(e) }
}

export {
  sendSms,
  sendToAllSubscribers,
}