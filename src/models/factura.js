import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FacturaSchema = new Schema({
FechaHoraFactura: {
type: Date
 },
CodigoCaja: {
type: Number
 },
CodigoRestaurante: {
type: Number
 },
CodigoEmpleado: {
type: Number
 },
EntradaDeDinero: {
type: Number
 },
DescripcionFactura: {
type: String
 },

})

FacturaSchema.set('toJSON',{
 transform: (document, returnedObject) => {
 returnedObject.id = returnedObject._id
 delete returnedObject._id
 delete returnedObject.__v
 }
})

export default FacturaSchema;
