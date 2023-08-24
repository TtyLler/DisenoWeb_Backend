import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const BitacoraSchema = new Schema({
    CodigoRegistro: {
      type: Number
    },
    Usuario: {
      type: String
    },
    FechaHora: {
      type: Date
    },
    Descripcion: {
      type: String
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
BitacoraSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default BitacoraSchema;