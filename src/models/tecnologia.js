import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const TecnologiaSchema = new Schema({
    CodigoTecnologia: {
      type: Number
    },
    NombreTecnologia: {
      type: String
    },
    CodigoRestaurante: {
      type: Number
    },
    CodigoMarca: {
      type: Number
    },
    DescripcionTecnologia: {
      type: String
    },
    CodigoProveedor: {
      type: Number
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
TecnologiaSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default TecnologiaSchema;