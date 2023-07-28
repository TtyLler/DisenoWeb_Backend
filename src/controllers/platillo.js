import mongoose from 'mongoose';
import PlatilloSchema from '../models/platillo.js'

const Platillo = mongoose.model('platillos', PlatilloSchema)

export const getPlatillo= async (req, res) => {
  try{
      const data = await Platillo.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOnePlatillo = async (req, res) => {
  try{
      const data = await Platillo.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createPlatillo = async (req, res) => {
  const data = new Platillo({
      CodigoEspecial: req.body.CodigoEspecial,
      PrecioPlatillo: req.body.PrecioPlatillo,
      CodigoMedida: req.body.CodigoMedida,
      NombrePlatillo: req.body.NombrePlatillo,
      IngredientePlatillo: req.body.IngredientePlatillo,
      Pais: req.body.Pais,
      DescripcionPlatillo: req.body.DescripcionPlatillo
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updatePlatillo = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Platillo.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deletePlatillo= async (req, res) => {
  try {
      const { id } = req.params;
      await Platillo.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
