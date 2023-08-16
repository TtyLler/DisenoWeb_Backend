import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MarcaSchema = new Schema({
CodigoMarca: {
type: Number
 },
CodigoProveedor: {
type: Number
 },

})

MarcaSchema.set('toJSON',{
 transform: (document, returnedObject) => {
 returnedObject.id = returnedObject._id
 delete returnedObject._id
 delete returnedObject.__v
 }
})

export default MarcaSchema;
