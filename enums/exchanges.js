const BINANCE = {
  name: 'binance',
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
  name: 'kucoin',
  apiRoot: 'https://api.kucoin.com',
  allCoins: '/v1/open/tick',
}

export { 
  BINANCE, 
  KUCOIN 
}