import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProveedorSchema = new Schema({
CodigoProveedor: {
type: Number
 },
NombreProveedor: {
type: String
 },
CodigoActivo: {
type: Number
 },
CodigoPais: {
type: Number
 },
Telefono: {
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
