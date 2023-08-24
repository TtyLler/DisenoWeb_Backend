import mongoose from 'mongoose'
import BitacoraSchema from '../models/bitacora.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Bitacora = mongoose.model('bitacoras', BitacoraSchema)

//retrieves all data and sends it as a JSON response
export const getBitacora = async (req, res) => {
  try {
    const data = await Bitacora.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneBitacora = async (req, res) => {
  try {
    const data = await Bitacora.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//creates a new record in a database using the data provide in the request body.
export const createBitacora = async (req, res) => {
  const lastEntry = await Bitacora.find().sort({ _id: -1 }).limit(1)
  const data = new Bitacora({
    CodigoRegistro: lastEntry[0]['CodigoRegistro'] + 1,
    Usuario: req.body.Usuario,
    FechaHora: req.body.FechaHora,
    Descripcion: req.body.Descripcion,
  })
  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//updates the document in a database using the provided request parameters and body data.
export const updateBitacora = async (req, res) => {
  try {
    const { id } = req.params
    const updatedData = req.body
    const options = { new: true }

    const result = await Bitacora.findByIdAndUpdate(id, updatedData, options)
    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteBitacora = async (req, res) => {
  try {
    const { id } = req.params
    await Bitacora.findByIdAndDelete(id)
    res.json({ msg: 'Entry has been Deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
