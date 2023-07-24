import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EspecialSchema = new Schema({
CodigoEspecial: {
type: Number
  },
DescripcionEspecial: {
type: String
  },

})

EspecialSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default EspecialSchema;
