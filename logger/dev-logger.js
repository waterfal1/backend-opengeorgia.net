import {format, createLogger, transports} from 'winston';
const {timestamp, combine, printf, errors, colorize} = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

function devLogger() {
    return createLogger({
        format: combine(
            colorize(),
            timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), 
            errors({stack: true}),
            logFormat),
        level: 'debug',
        transports: [
          new transports.Console()],
      });
} 


  export default devLogger;
