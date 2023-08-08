import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
  CodigoUsuario: {
    type: Number,
  },
  NombreUsuario: {
    type: String
  },
  Contrasena: {
    type: String
  },
})

UsuarioSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default UsuarioSchema
