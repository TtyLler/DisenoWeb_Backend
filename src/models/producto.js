import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductoSchema = new Schema({
CodigoProducto: {
type: Number
  },
CodigoMarca: {
type: Number
  },
TipoProducto: {
type: String
  },

})

ProductoSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default ProductoSchema;
