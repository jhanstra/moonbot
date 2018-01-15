#!/usr/bin/env node --harmony
'use strict'

import { targetMarkets } from './targetMarkets'
import { BINANCE, KUCOIN } from './enums/exchanges'
import { log, error, sendSms, sendToAllSubscribers } from './utils'
import { getMarketSymbols } from './api/markets'


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

const checkForNewMarkets = (exchange, exchangeSymbols, targetMarkets) => {
  log(exchangeSymbols)
  targetMarkets.map((targetMarket) => {
    if (exchangeSymbols.includes(targetMarket.symbol) && targetMarket.awaitedExchanges.includes(exchange)) {
      sendToAllSubscribers(`Test from Moonbot: ${targetMarket.name} is now on ${exchange.name}!`)
      return null
    }
  })  
}

const moon = async () => {
  let binanceSymbols, kucoinSymbols
  try {
    binanceSymbols = await getMarketSymbols(BINANCE)
    kucoinSymbols = await getMarketSymbols(KUCOIN)
  } catch (e) { error(e) }
  checkForNewMarkets(BINANCE, binanceSymbols, targetMarkets)
  checkForNewMarkets(KUCOIN, kucoinSymbols, targetMarkets)
}

moon()
// setInterval(moon, 10000)