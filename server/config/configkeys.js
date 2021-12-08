/* eslint-disable prettier/prettier */
// improtando el paquete de DotEnv
import dotenv from 'dotenv';
// Cargando las variables de entorno
dotenv.config();

// Exportando los valores de configuracion
export default {
  homeUrl: `${process.env.APP_URL}:${process.env.PORT}`,
  port: process.env.PORT,
  ip: process.env.IP,
  databaseUrl: process.env.DATABASE_URL,
};
