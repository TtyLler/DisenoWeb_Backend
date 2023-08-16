import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PaisSchema = new Schema({
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

PaisSchema.set('toJSON',{
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id
  delete returnedObject._id
  delete returnedObject.__v
 }
})

export default PaisSchema;
