import ccxt from 'ccxt'
require('dotenv').config()

const binancePublic = new ccxt.binance({
  rateLimit: 2000,
})

const binancePrivate = new ccxt.binance({
  apiKey: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_SECRET_KEY,
})

const kucoinPublic = new ccxt.kucoin({
  rateLimit: 2000,
})

const kucoinPrivate = new ccxt.kucoin({
  apiKey: process.env.KUCOIN_API_KEY,
  secret: process.env.KUCOIN_SECRET_KEY,
})

export {
  binancePublic,
  binancePrivate,
  kucoinPublic,
  kucoinPrivate,
}