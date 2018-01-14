import axios from 'axios'
import { getExchangeSymbol } from './utils/utils'
import { BINANCE } from './enums/exchanges'

const crypto = require('crypto')
require('dotenv').config()

const binanceAPI = axios.create({
  baseURL: 'https://api.binance.com/api',
  headers: { 'X-MBX-APIKEY': process.env.BINANCE_API_KEY }
})

const getAllSymbols = async (exchange) => {
  let symbols = [];
  if (exchange === BINANCE) {
    const res = await binanceAPI.get(BINANCE.allCoins)
    res.data.map(pair => symbols.push(pair.symbol))
    return symbols
  }
}

const placeBuyOrder = async (params) => {
  if (params.exchange === BINANCE) {
    const query = `symbol=${getExchangeSymbol(params.ticker, BINANCE)}&side=BUY&quantity=${params.quantity}&type=${params.buyType}&timeInForce=GTC&recvWindow=6000000&timestamp=${Date.now()}`
    const signature = crypto.createHmac('sha256', process.env.BINANCE_SECRET_KEY).update(query).digest('hex')
    console.log('signature', signature)
    console.log('request', `${BINANCE.testOrder}?${query}&signature=${signature}`)
    // change testOrder to order when you're ready to do this fo real
    try {
      const res = await binanceAPI.post(`${BINANCE.testOrder}?${query}&signature=${signature}`)
      console.log('res', res)
    } catch (e) {
      console.log('error', e)
    }

  }
}

export {
  getAllSymbols,
  placeBuyOrder,
}