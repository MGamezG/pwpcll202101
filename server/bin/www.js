#!/usr/bin/env node
import Winston from '@server/config/winston';
// importando configuraciones de aplicacion
import configkeys from '@server/config/configkeys';
// importando la clase de conexion
import MongooseODM from '@server/config/odm';
/**
 * Module dependencies.
 */
import Debug from 'debug';
import http from 'http';
import app from '../app';

const debug = Debug('projnotes:server');
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Get port from environment and store inn Express.
 */

const port = normalizePort(configkeys.port || '3000');
app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      Winston.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      Winston.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Create HTTP server.
 */

const server = http.createServer(app);
/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on  ${bind}`);
}
// creando el objeto de conexion
const mongooseOdm = new MongooseODM(configkeys.databaseUrl);

// IIFE
(async () => {
  try {
    const connectionResult = await mongooseOdm.connect();
    if (connectionResult) {
      Winston.info('conexion a la base de datos establecida');
      // puertos
      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    }
  } catch (error) {
    Winston.error(`no se pudo inicar el servidor: ${error.message}`);
  }
})();
