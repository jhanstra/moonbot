
import { BINANCE, KUCOIN } from '../enums/exchanges'
import { log, error, binancePublic, kucoinPublic } from '../utils'

const getSymbolsArrayFromFullData = (marketData) => {
  let symbols = []
  Object.values(marketData).map(market => symbols.push(market.symbol))
  return symbols
}

const getMarketSymbols = async (exchange) => {
  let markets = {}, symbols = []
  switch (exchange) {
    case BINANCE:
      try {
        markets = await binancePublic.load_markets()
        symbols = getSymbolsArrayFromFullData(markets)
      } catch (e) { error(e) }
      return symbols
    case KUCOIN:
      try {
        markets = await kucoinPublic.load_markets()
        symbols = getSymbolsArrayFromFullData(markets)
      } catch (e) { error(e) }
      return symbols
  }
}

export {
  getMarketSymbols,
}