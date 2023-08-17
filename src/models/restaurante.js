import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const RestauranteSchema = new Schema({
    CodigoRestaurante: {
      type: Number
    },
    NombreRestaurante: {
      type: String
    },
    DireccionRestaurante: {
      type: String
    },
    CantidadClientes: {
      type: Number
    },
    Telefono: {
      type: String
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
RestauranteSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default RestauranteSchema;