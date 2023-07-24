import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TransaccionSchema = new Schema({
FechaHora: {
type: String
  },
CodigoRestaurante: {
type: Number
  },
CodigoBebida: {
type: Number
  },
EstadoTransaccion: {
type: String
  },
})

TransaccionSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default TransaccionSchema;
