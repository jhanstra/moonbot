/* This file contains coins on my watch list. This file is updated manually with my investment strategies. For each coin, mark how high you are willing to buy and whether to send a confirmation SMS first */

import { BINANCE, GDAX, KUCOIN } from './enums/exchanges'
import { sellMethods } from './enums/sellMethods'

const coins = [
  {
    ticker: 'WAN',
    name: 'Wanchain',
    buyUpToMarketCap: 750000000,
    investment: 'A100',
    circulatingSupply: 107000000,
    askMeFirst: false,
    sell: null,
    awaitedExchanges: [BINANCE, KUCOIN]
  },
  {
    ticker: 'LTC',
    name: 'Litecoin',
    investment: 'A100',
    askMeFirst: false,
    sell: null,
    awaitedExchanges: [BINANCE]
  },
  {
    ticker: 'XRP',
    name: 'Ripple',
    investment: 'B100',
    askMeFirst: true,
    sell: sellMethods.ONE20,
    awaitedExchanges: [GDAX]
  },
]

export {
  coins,
}