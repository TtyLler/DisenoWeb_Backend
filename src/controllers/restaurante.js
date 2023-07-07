import mongoose from 'mongoose';
import RestauranteSchema from '../models/restaurante.js'

const Restaurant = mongoose.model('restaurantes', RestauranteSchema)

export const getRestaurant = async (req, res) => {
  try{
      const data = await Restaurant.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneRestaurant = async (req, res) => {
  try{
      const data = await Restaurant.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

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

export const deleteRestaurant = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Restaurant.findByIdAndDelete(id)
      res.send(`Restaurant "${data.NombreRestaurante}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
