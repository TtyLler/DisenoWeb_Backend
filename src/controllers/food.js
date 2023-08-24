import mongoose from 'mongoose';
import FoodSchema from '../models/food.js'

const Food = mongoose.model('foods', FoodSchema)

export const getFood= async (req, res) => {
  try{
      const data = await Food.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneFood = async (req, res) => {
  try{
      const data = await Food.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createFood = async (req, res) => {
  const data = new Food({
    CodigoCart: req.body.CodigoCart,
    NombreProductoCart: req.body.NombreProductoCart,
    CantidadCart: req.body.CantidadCart,
    MesaCart: req.body.MesaCart,
    PrecioCart: req.body.PrecioCart,
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateFood = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Food.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteFood= async (req, res) => {
  try {
      const { id } = req.params;
      await Food.findByIdAndDelete(id)
      res.json({msg: 'Food has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
