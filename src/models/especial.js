import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EspecialSchema = new Schema({
  CodigoEspecial: {
    type: Number,
  },
  NombreEspecial: {
    type: String,
  },
  DescripcionEspecial: {
    type: String,
  },
  Precio: {
    type: Number,
  },
})

EspecialSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default EspecialSchema
