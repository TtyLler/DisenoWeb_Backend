import mongoose from 'mongoose'

const Schema = mongoose.Schema

//create a new mongoose schema
const ConsecutivoSchema = new Schema({
    CodigoConsecutivo: {
      type: Number
    },
    DescripcionConsecutivo: {
      type: String
    },
    PrefijoConsecutivo: {
      type: String
    },
    TipoConsecutivo: {
      type: Number
    },
    ValorConsecutivo: {
      type: Number
    }
})

//setting an option for the schema to specify how the document should be transformed when converted to JSON.
ConsecutivoSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default ConsecutivoSchema;