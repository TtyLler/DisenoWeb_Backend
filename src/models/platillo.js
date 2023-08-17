import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PlatilloSchema = new Schema({
CodigoEspecial: {
type: Number
  },
PrecioPlatillo: {
type: Number
  },
CodigoMedida: {
type: Number
  },
NombrePlatillo: {
type: String
  },
IngredientePlatillo: {
type: String
  },
DescripcionPlatillo: {
type: String
  },

})

PlatilloSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default PlatilloSchema;
