import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MesaSchema = new Schema({
    CodigoMesa: {
      type: Number
    },
    NombreMesa: {
      type: String
    },
    NumeroMesa: {
      type: Number
    },
    CodigoRestaurante: {
      type: Number
    },
    CantidadSillasMesa: {
      type: Number
    },
    CodigoRestaurante: {
      type: Number
    },
})

MesaSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default MesaSchema;