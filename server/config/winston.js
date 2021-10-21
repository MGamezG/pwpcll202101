// importando a winston from
import winston, { exitOnError, format, transport } from 'winston';
//
import appRoot from 'app-root-path';
// componentes para el formato personalizado
const { combine, timestamp,  printf, uncolorize, json, colorize, } = format;
// perfil de color para el log
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'green',
};
// agregando al perfil de winston
winston.addColors(colors);

// fromato de consola
const myFormat = combine(
  colorize({ all: true }),
  timestamp(),
  printf((info) => `${info.timestamp} ${info.level} : ${info.messages}`),
);

//formato para la salida de los archivos de log
const myFileFormat = combine(
  uncolorize(),
  timestamp(),
  json(),
);

// creando objetos de configuracion
const options = {
  infoFile: {
    level: 'info',
    Filename: `${appRoot} /server/logs/infos.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat
  }, 
  warnFile: {
    level: 'warn',
    Filename: `${appRoot} /server/logs/warns.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat
  },
  errorFile: {
    level: 'error',
    Filename: `${appRoot} /server/logs/errors.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat
  },
  console {
      level: 'debug',
      handleException: true;
      format: myFormat,
  }
};
// creando la instancia del logger

const logger = winston.createLogger(
    transports:[
        new winston.transports.File(options.infoFile),
        new winston.transports.File(options.warnFile),
        new winston.transports.File(options.errorFile),
        new winston.transports.File(options.console),
    ], 
    exitOnError: false, // no finaliza en ecepciones manejadas
);

//
logger.stream={
    write(message){
        logger.info(massage);
    },
};

export default logger;
