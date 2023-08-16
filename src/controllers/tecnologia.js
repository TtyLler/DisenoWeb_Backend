import mongoose from 'mongoose';
import TecnologiaSchema from '../models/tecnologia.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Tecnologias = mongoose.model('tecnologias', TecnologiaSchema)

//retrieves all data and sends it as a JSON response
export const getTecnologia= async (req, res) => {
  try{
      const data = await Tecnologias.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneTecnologia= async (req, res) => {
  try{
      const data = await Tecnologias.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//creates a new record in a database using the data provide in the request body.
export const createTecnologia = async (req, res) => {
  const data = new Tecnologias({
      CodigoTecnologia: req.body.CodigoTecnologia,
      NombreTecnologia: req.body.NombreTecnologia,
      CodigoRestaurante: req.body.CodigoRestaurante,
      CodigoMarca: req.body.CodigoMarca,
      DescripcionTecnologia: req.body.DescripcionTecnologia,
      CodigoProveedor: req.body.CodigoProveedor
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
export const updateTecnologia= async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Tecnologias.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteTecnologia= async (req, res) => {
  try {
      const { id } = req.params;
      await Tecnologias.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
