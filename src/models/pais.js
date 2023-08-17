import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PaisSchema = new Schema({
CodigoPais: {
type: Number
  },
NombrePais: {
type: String
  }

})

PaisSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default PaisSchema;
