import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LimpiezaSchema = new Schema({
CodigoLimpieza: {
type: Number
  },
DescripcionLimpieza: {
type: String
  },
CodigoRestaurante: {
type: Number
  },
CantidadLimpieza: {
type: Number
  },

})

LimpiezaSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default LimpiezaSchema;
