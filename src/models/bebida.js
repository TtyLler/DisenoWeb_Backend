import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
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

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
BebidaSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default BebidaSchema;