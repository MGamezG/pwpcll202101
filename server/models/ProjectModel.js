/* eslint-disable prettier/prettier */
// importando la libreria de mongoose
import * as mongoose from 'mongoose';
// destructuracion para obtener squema
import { Schema } from 'mongoose';

// creando schema
const projectSchema = new Schema({
  name: {
    type: 'string',
    require: true,
  },
  description: {
    type: 'string',
    require: true,
  },
  date: {
    type: 'date',
    default: Date.now,
  },
});
export default mongoose.model('project', projectSchema);
