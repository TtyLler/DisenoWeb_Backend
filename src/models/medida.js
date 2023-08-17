import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MedidaSchema = new Schema({
CodigoMedida: {
type: Number
  },
DescripcionMedida: {
type: String
  },

})

MedidaSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default MedidaSchema;
