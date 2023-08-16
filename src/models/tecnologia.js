import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const TecnologiaSchema = new Schema({
    CodigoTec: {
      type: Number
    },
    RestauranteTec: {
      type: Number
    },
    NombreTec: {
      type: String
    },
    MarcaTec: {
      type: String
    },
    CantidadTec: {
      type: Number
    },
    DescripcionTec: {
      type: String
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