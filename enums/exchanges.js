import {
  binancePublic,
  binancePrivate,
  kucoinPublic,
  kucoinPrivate,
} from '../utils'

const BINANCE = {
  name: 'binance',
  publicAPI: binancePublic,
  privateAPI: binancePrivate,
  apiRoot: 'https://api.binance.com/api',
  allCoins: '/v1/ticker/allPrices',
  order: '/v3/order',
  testOrder: '/v3/order/test',
  checkOrder: '/v3/order',
}

const GDAX = {
  name: 'gdax',
  apiRoot: 'https://api.gdax.com',
}

const KUCOIN = {
  name: 'bucoin',
  publicAPI: kucoinPublic,
  privateAPI: kucoinPrivate,
  apiRoot: 'https://api.kucoin.com',
  allCoins: '/v1/open/tick',
}

export { 
  BINANCE, 
  KUCOIN,
}