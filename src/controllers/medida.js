import mongoose from 'mongoose';
import MedidaSchema from '../models/medida.js'

const Medida = mongoose.model('medidas', MedidaSchema)

export const getMedida= async (req, res) => {
  try{
      const data = await Medida.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneMedida = async (req, res) => {
  try{
      const data = await Medida.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createMedida = async (req, res) => {
  const data = new Medida({
      CodigoMedida: req.body.CodigoMedida,
      DescripcionMedida: req.body.DescripcionMedida
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateMedida = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Medida.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteMedida= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Medida.findByIdAndDelete(id)
      res.send(`Medida "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
