import mongoose from 'mongoose';
import RestauranteSchema from '../models/restaurante.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Restaurant = mongoose.model('restaurantes', RestauranteSchema)

//retrieves all data and sends it as a JSON response
export const getRestaurant = async (req, res) => {
  try{
      const data = await Restaurant.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneRestaurant = async (req, res) => {
  try{
      const data = await Restaurant.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//creates a new record in a database using the data provide in the request body.
export const createRestaurant = async (req, res) => {
  const data = new Restaurant({
      CodigoRestaurante: req.body.CodigoRestaurante,
      NombreRestaurante: req.body.NombreRestaurante,
      DireccionRestaurante: req.body.apellDireccionRestauranteidos,
      CantidadClientes: req.body.CantidadClientes,
      Telefono: req.body.Telefono
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
export const updateRestaurant = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Restaurant.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteRestaurant = async (req, res) => {
  try {
      const { id } = req.params;
      await Restaurant.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
