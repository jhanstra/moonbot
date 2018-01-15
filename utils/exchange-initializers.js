import ccxt from 'ccxt'

const binancePublic = new ccxt.binance({
  rateLimit: 2000,
})

const binancePrivate = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_SECRET_KEY,
  rateLimit: 2000,
})

const kucoinPublic = new ccxt.kucoin({
  rateLimit: 2000,
})

const kucoinPrivate = new ccxt.kucoin({
  apiKey: process.env.KUCOIN_API_KEY,
  secret: process.env.KUCOIN_SECRET_KEY,
  rateLimit: 2000,
})

export {
  binancePublic,
  binancePrivate,
  kucoinPublic,
  kucoinPrivate,
}