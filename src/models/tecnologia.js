import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const TecnologiaSchema = new Schema({
  CodigoTec: {
      type: Number
    },
    RestauranteTec: {
      type: String
    },
    NombreTec: {
      type: Number
    },
    MarcaTec: {
      type: Number
    },
    CantidadTec: {
      type: String
    },
    DescripcionTec: {
      type: Number
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
TecnologiaSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default TecnologiaSchema;