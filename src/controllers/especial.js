import mongoose from 'mongoose';
import EspecialSchema from '../models/especial.js'

const Especial = mongoose.model('especiales', EspecialSchema)

export const getEspecial= async (req, res) => {
  try{
      const data = await Especial.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneEspecial = async (req, res) => {
  try{
      const data = await Especial.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createEspecial = async (req, res) => {
  const data = new Especial({
      CodigoEspecial: req.body.CodigoEspecial,
      DescripcionEspecial: req.body.DescripcionEspecial
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateEspecial = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Especial.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteEspecial= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Especial.findByIdAndDelete(id)
      res.send(`Especial "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
