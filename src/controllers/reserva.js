import mongoose from 'mongoose'
import ReservaSchema from '../models/reserva.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Reserva = mongoose.model('reservas', ReservaSchema)

//retrieves all data and sends it as a JSON response
export const getReserva= async (req, res) => {
  try {
    const data = await Reserva.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneReserva = async (req, res) => {
  try {
    const data = await Reserva.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//creates a new record in a database using the data provide in the request body.
export const createReserva = async (req, res) => {
  const lastEntry = await Reserva.find().sort({ _id: -1 }).limit(1)
  const data = new Reserva({
    CodigoReserva: lastEntry[0]['CodigoReserva'] + 1,
    FechaHora: req.body.FechaHora,
    NombreCliente: req.body.NombreCliente,
    CantidadPersonas: req.body.CantidadPersonas
  })
  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//updates the document in a database using the provided request parameters and body data.
export const updateReserva = async (req, res) => {
  try {
    const { id } = req.params
    const updatedData = req.body
    const options = { new: true }

    const result = await Reserva.findByIdAndUpdate(id, updatedData, options)
    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteReserva = async (req, res) => {
  try {
    const { id } = req.params
    await Reserva.findByIdAndDelete(id)
    res.json({ msg: 'Entry has been Deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const userReserva = async (req, res) => {
  try {
    const data = await Reserva.find().where({NombreCliente: req.params.id})
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}