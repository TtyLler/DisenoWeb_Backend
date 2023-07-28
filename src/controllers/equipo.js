import mongoose from 'mongoose';
import EquipoSchema from '../models/equipo.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Equipos = mongoose.model('equipos', EquipoSchema)

//retrieves all data and sends it as a JSON response
export const getEquipo= async (req, res) => {
  try{
      const data = await Equipos.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneEquipo= async (req, res) => {
  try{
      const data = await Equipos.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//creates a new record in a database using the data provide in the request body.
export const createEquipo = async (req, res) => {
  const data = new Equipos({
      CodigoEquipo: req.body.CodigoEquipo,
      NombreEquipo: req.body.NombreEquipo,
      DescripcionEquipo: req.body.DescripcionEquipo,
      Cantidad: req.body.Cantidad,
      CodigoProveedor: req.body.CodigoProveedor,
      CodigoRestaurante: req.body.CodigoRestaurante
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}
//updates the document in a database using the provided request parameters and body data.
export const updateEquipo= async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Equipos.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteEquipo= async (req, res) => {
  try {
      const { id } = req.params;
      await Equipos.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
