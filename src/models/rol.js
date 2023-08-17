import mongoose from 'mongoose'

const Schema = mongoose.Schema

const RolSchema = new Schema({
CodigoRol: {
type: Number
  },
DescripcionRol: {
type: String
  },

})

RolSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default RolSchema;
