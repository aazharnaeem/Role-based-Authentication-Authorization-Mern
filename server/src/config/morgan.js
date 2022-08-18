const morgan = require('morgan');

const logger = require('./logger');



const stream = {
    // use http severity
    write: (message) => logger.http(message),
}

const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? false : true;
}

const morganMiddleware = morgan(

    // creating morgan token
    `remote-addr
    :method 
    :url 
    :status 
    :res[content-length] - 
    :response-time ms`,
    //using methods above
    { stream, skip }
);

module.exports = morganMiddleware