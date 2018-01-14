const getExchangeSymbol = (ticker, exchange, base) => {
  switch (exchange.name) {
    case 'binance':
      return base ? `${ticker}${base}` : `${ticker}BTC`
    case 'kucoin':
      return base ? `${ticker}-${base}` : `${ticker}-BTC`
  }
}

export {
  getExchangeSymbol,
}