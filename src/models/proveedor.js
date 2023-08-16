import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProveedorSchema = new Schema({
CodigoProv: {
type: Number
 },
NombreProv: {
type: String
 },
ApellidoProv: {
type: String
 },
TelefonoProv: {
type: Number
 },
 CelularProv: {
    type: Number
     },
})

ProveedorSchema.set('toJSON',{
 transform: (document, returnedObject) => {
 returnedObject.id = returnedObject._id
 delete returnedObject._id
 delete returnedObject.__v
 }
})

export default ProveedorSchema;
