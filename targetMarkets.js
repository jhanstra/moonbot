/* This file contains coins on my watch list. This file is updated manually with my investment strategies. For each coin, mark how high you are willing to buy and whether to send a confirmation SMS first */

import { BINANCE, GDAX, KUCOIN } from './enums/exchanges'
import { ALL, BITCOIN } from './enums/investmentSources'
import { sellMethods } from './enums/sellMethods'


const targetMarkets = [
  {
    ticker: 'WAN',
    symbol: 'WAN/BTC',
    name: 'Wanchain',
    buyUpToMarketCap: 750000000,
    investment: 100,
    investmentSource: ALL,
    circulatingSupply: 107000000,
    askMeFirst: false,
    sell: null,
    awaitedExchanges: [BINANCE, KUCOIN],
    availableExchanges: []
  },
  {
    ticker: 'LTC',
    symbol: 'LTC/BTC',
    name: 'Litecoin',
    investment: 'A100',
    askMeFirst: false,
    sell: null,
    awaitedExchanges: [BINANCE, KUCOIN]
  },
  {
    ticker: 'XRP',
    symbol: 'XRP/BTC',
    name: 'Ripple',
    investment: 'B100',
    askMeFirst: true,
    sell: sellMethods.ONE20,
    awaitedExchanges: [GDAX]
  },
]

export {
  targetMarkets,
}