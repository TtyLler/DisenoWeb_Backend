import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CajaSchema = new Schema({
  CodigoCaja: {
    type: Number,
  },
  CodigoRestaurante: {
    type: Number,
  },
  CodigoEmpleado: {
    type: Number,
  },
  Descripcion: {
    type: String,
  },
  EntradaDeDinero: {
    type: Number,
  }
})

CajaSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default CajaSchema
