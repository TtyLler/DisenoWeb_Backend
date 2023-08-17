import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CargoEmpleadoSchema = new Schema({
CodigoEmpleado: {
type: Number
  },
DescripcionCargo: {
type: String
  },
CodigoPais: {
type: Number
  },
CodigoRol: {
type: Number
  },
})

CargoEmpleadoSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default CargoEmpleadoSchema;
