#!/usr/bin/env node --harmony
'use strict'

import { getAllSymbols, placeBuyOrder } from './api'
import { coins } from './coins'
import { BINANCE, KUCOIN } from './enums/exchanges'
import buyTypes from './enums/buyTypes'
import { getExchangeSymbol } from './utils/utils'
import axios from 'axios'
import ccxt from 'ccxt'

let binance = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_SECRET_KEY,
})

// const placeOrder = () => {
//   try {
//     binance.createMarketBuyOrder('LTC/BTC', 0.05, { type: 'market', timestamp: Date.now(), side: 'buy'}).then((response) => {
//       console.log('response', response)
//     })
//     binance.fetchOpenOrders('LTC/BTC').then((response) => {
//       console.log('responze', response)
//     })
//   } catch (e) {
//     console.log('e', e)
//   }
// }

const moon = async () => {
  /* Binance: Check for new coins */
  const symbols = await getAllSymbols(BINANCE)

  coins.map((coin) => {
    if (symbols.find(symbol => symbol === getExchangeSymbol(coin.ticker, BINANCE)) 
          && coin.awaitedExchanges.includes(BINANCE)) {
      
      //placeOrder()

    //  placeBuyOrder({
    //     exchange: BINANCE, 
    //     ticker: coin.ticker, 
    //     buyType: buyTypes.MARKET, 
    //     quantity: 0.05,
    //   })


      // sendText()
      console.log('buy da coin!', coin.name)
      return null
    }
  })
  /* If coin is in coins.js, place buy order up to the buy price */
  
}

// moon()


setInterval(moon, 5000)