import {format, createLogger, transports} from 'winston';
const {timestamp, combine, errors, json} = format;

function prodLogger() {
    return createLogger({
        format: combine(
            timestamp(), 
            errors({stack: true}),
            json()),
        level: 'debug',
        transports: [
          new transports.Console()],
      });
} 

  export default prodLogger;
