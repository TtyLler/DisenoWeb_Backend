import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BebidaSchema = new Schema({
    CodigoBebida: {
      type: Number
    },
    TipoBebida: {
      type: String
    },
    Marca: {
      type: String
    },
    Precio: {
      type: Number
    },
    CodigoRestaurante: {
      type: Number
    },
    Pais: {
      type: String
    },
    CodigoMedida: {
      type: Number
    },
    Ano: {
      type: Number
    },
})

BebidaSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default BebidaSchema;