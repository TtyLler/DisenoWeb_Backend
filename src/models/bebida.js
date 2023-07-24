import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ClienteSchema = new Schema({
CodigoCliente: {
type: Number
  },
NombreCliente: {
type: String
  },
MontoPagadoCliente: {
type: Number
  },

})

ClienteSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default ClienteSchema;
