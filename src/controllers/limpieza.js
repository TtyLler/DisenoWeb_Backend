import mongoose from 'mongoose';
import LimpiezaSchema from '../models/limpieza.js'

const Limpieza = mongoose.model('limpiezas', LimpiezaSchema)

export const getLimpieza= async (req, res) => {
  try{
      const data = await Limpieza.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneLimpieza = async (req, res) => {
  try{
      const data = await Limpieza.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createLimpieza = async (req, res) => {
  const data = new Limpieza({
      CodigoLimpieza: req.body.CodigoLimpieza,
      NombreLimpieza: req.body.NombreLimpieza,
      CantidadLimp: req.body.CantidadLimp,
      RestauranteLimp: req.body.RestauranteLimp
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateLimpieza = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Limpieza.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteLimpieza= async (req, res) => {
  try {
      const { id } = req.params;
      await Limpieza.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
