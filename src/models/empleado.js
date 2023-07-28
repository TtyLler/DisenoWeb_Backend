import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EmpleadoSchema = new Schema({
  CodigoEmpleado: {
    type: Number,
  },
  NombreEmpleado: {
    type: String,
  },
  CodigoUsuario: {
    type: Number,
  },
  CodigoRestaurante: {
    type: Number,
  },
  Cedula: {
    type: String,
  },
  Telefonos: {
    type: String,
  },
})

EmpleadoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default EmpleadoSchema
