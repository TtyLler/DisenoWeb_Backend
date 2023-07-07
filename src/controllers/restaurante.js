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

//TODO:INCLUIR EL RESTO DE METODOS PARA EL CRUD DE RESTAURANTE