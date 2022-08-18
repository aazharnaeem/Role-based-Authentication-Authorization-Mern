const winston = require('winston');
const path = require('path');
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}
// if run in production will show only warn and error messages
const level = () => {
    const env = process.env.NODE_ENV || 'development';

    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'info';
}

//Defining different colors for each level
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
    http: 'magenta',
}

//linking colors to the above defined security levels
winston.addColors(colors);

// customizing log format
const format = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.align({ all: true }),

    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
)
// defining which transport the logger must use to print messages
// usiing 3 transports in this method
const transports = [
    //allow to use the console
    new winston.transports.Console(),

    // all error level messages in error.log file
    new winston.transports.File({
        // filename: `${__dirname}/src/logs/error.log`,
        filename: `${path.resolve(__dirname, '../logs/error.log')}`,
        level: 'error',
        // format: format,
    }),

    // all error messafes in combined.log file
    new winston.transports.File({
        // filename:`${__dirname}/src/logs/combinedlogs.log`,
        filename: `${path.resolve(__dirname, '../logs/combined.log')}`,
        // format: format,
    }),
]

// creating the error instance
const logger = winston.createLogger({
    level: level(),
    levels,
    format: format,
    transports: transports,
})

module.exports = logger