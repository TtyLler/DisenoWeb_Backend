import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservaSchema = new Schema({
  CodigoReserva: {
    type: Number,
  },
  FechaHora: {
    type: Date
  },
  NombreCliente:{
    type: String
  },
  CantidadPersonas:{
    type: Number
  },
})

ReservaSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default ReservaSchema
