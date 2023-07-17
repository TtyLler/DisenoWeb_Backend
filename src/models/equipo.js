import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const EquipoSchema = new Schema({
    CodigoEquipo: {
      type: Number
    },
    NombreEquipo: {
      type: String
    },
    DescripcionEquipo: {
      type: String
    },
    Cantidad: {
      type: Number
    },
    CodigoProveedor: {
      type: Number
    },
    CodigoRestaurante: {
      type: Number
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
EquipoSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default EquipoSchema;