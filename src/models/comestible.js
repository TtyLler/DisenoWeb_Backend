import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ComestibleSchema = new Schema({
CodigoComestible: {
type: Number
  },
DescripcionComestible: {
type: String
  },
CantidadComestible: {
type: Number
  },
CodigoRestaurante: {
type: Number
  },
TipoComestible: {
type: String
  },

})

ComestibleSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default ComestibleSchema;
