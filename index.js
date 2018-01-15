#!/usr/bin/env node --harmony
'use strict'

require('dotenv').config()

import { targetMarkets } from './targetMarkets'
import { BINANCE, KUCOIN } from './enums/exchanges'
import { log, error, sendSms, sendToAllSubscribers } from './utils'
import { getMarketSymbols } from './api/markets'
import ccxt from 'ccxt'

const buyNewMarket = async (exchange, symbol) => {
  let buyOrder
  try {
    buyOrder = await exchange.privateAPI.createMarketBuyOrder(symbol, 0.05, { type: 'market', timestamp: Date.now(), side: 'buy'})
    log(buyOrder)
  } catch (e) { error(e) }
}

const checkForNewMarkets = (exchange, exchangeSymbols, targetMarkets) => {
  targetMarkets.map((targetMarket) => {
    if (exchangeSymbols.includes(targetMarket.symbol) 
      && targetMarket.awaitedExchanges.includes(exchange)) {
      buyNewMarket(exchange, targetMarket.symbol)
      // sendToAllSubscribers(`${targetMarket.name} is now on ${exchange.name}!`)
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
  // checkForNewMarkets(KUCOIN, kucoinSymbols, targetMarkets)
}

moon()
// setInterval(moon, 10000)