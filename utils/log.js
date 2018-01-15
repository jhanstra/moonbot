const winston = require('winston')

winston.cli()

const getDateTime = () => {
  const date = new Date()
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}---${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
}

const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: `logs/moonbot--${getDateTime()}` })
  ],
});

logger.cli()

const log = (label, output) => {
  if (typeof output === 'object') {
    return logger.log('info', label, JSON.stringify(output, null, 2))
  } else {
    return logger.log('info', label, output)
  }
  
}

const warn = (output) => {
  return logger.log('warn', output)
}

const error = (output) => {
  return logger.log('error', output)
}

export {
  log,
  warn,
  error,
}