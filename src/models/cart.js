import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const CartSchema = new Schema({
  CodigoCart: {
      type: String
   
    },
    NombreProductoCart: {
      type: String
    },
  
    CantidadCart: {
      type: Number
    },
    MesaCart: {
      type: Number
    },
    PrecioCart: {
      type: Number
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
CartSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default CartSchema;