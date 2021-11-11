/* eslint-disable prettier/prettier */
// importando blibliotecas de odm
import mongoose from 'mongoose';
// importando escrip para el log
import winston from './winston';

class MongooseODM {
  // constructor
  constructor(url) {
    this.url = url;
  }

  // metodo de conexion
  async connect() {
    mongoose.Promise = global.Promise;
    winston.info(`conectando a la base de datos:${this.url}`);
    try {
      // sustituir  el sistema de promesas  de mongoose por el de javascript
      await mongoose.connect(this.url);
      return true;
    } catch (error) {
      winston.error(
        `error al conectarse a la base de datos: ${error.message}`
      );
      return false;
    }
  }
};
export default MongooseODM;
