import mongoose from 'mongoose';
import PaisSchema from '../models/pais.js'

const Pais = mongoose.model('paises', PaisSchema)

export const getPais= async (req, res) => {
  try{
      const data = await Pais.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOnePais = async (req, res) => {
  try{
      const data = await Pais.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createPais = async (req, res) => {
  const data = new Pais({
      CodigoPais: req.body.CodigoPais,
      NombrePais: req.body.NombrePais
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updatePais = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Pais.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deletePais= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Pais.findByIdAndDelete(id)
      res.send(`Pais "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
