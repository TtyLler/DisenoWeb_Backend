import mongoose from 'mongoose';
import BebidaSchema from '../models/bebida.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Bebida = mongoose.model('bebidas', BebidaSchema)

//retrieves all data and sends it as a JSON response
export const getBebida= async (req, res) => {
  try{
      const data = await Bebida.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneBebida = async (req, res) => {
  try{
      const data = await Bebida.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//creates a new record in a database using the data provide in the request body.
export const createBebida = async (req, res) => {
  const data = new Bebida({
      CodigoBebida: req.body.CodigoBebida,
      TipoBebida: req.body.TipoBebida,
      Marca: req.body.Marca,
      Precio: req.body.Precio,
      CodigoRestaurante: req.body.CodigoRestaurante,
      Pais: req.body.Pais,
      CodigoMedida: req.body.CodigoMedida,
      Ano: req.body.Ano
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
export const updateBebida = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Bebida.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteBebida= async (req, res) => {
  try {
      const { id } = req.params;
      await Bebida.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
