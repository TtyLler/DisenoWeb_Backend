import mongoose from 'mongoose'

const Schema = mongoose.Schema

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

RestauranteSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default RestauranteSchema;