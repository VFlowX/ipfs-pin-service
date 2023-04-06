const winston = require('winston');
require('winston-daily-rotate-file');
const logDir = 'logs';
var path = require('path');
const { timestamp, label, printf, errors } = winston.format;

const myFormat = printf(({ level, message, service, timestamp }) => {
  return `${timestamp} [${service}] ${level}: ${JSON.stringify(message)}`;
});

const timezoned = () => {
  return new Date().toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh'
  });
}

var transportErr = new (winston.transports.DailyRotateFile)({
  filename: path.join(logDir, 'error-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '10m',
  level: 'error',
  maxFiles: '30d'
});
var transportCombine = new (winston.transports.DailyRotateFile)({
  filename: path.join(logDir, 'combined-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '30d'
});

var transportConsole = new (winston.transports.Console)({
  format: winston.format.combine(
    winston.format.colorize(),
    myFormat,
  )
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    timestamp({ format: timezoned }),
    myFormat,
    // label({ label: ' ' }),
    errors({ stack: true }),
  ),
  defaultMeta: { service: 'ipfs' },
  transports: [
    transportErr, transportCombine
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(transportConsole);
}

module.exports = logger;
