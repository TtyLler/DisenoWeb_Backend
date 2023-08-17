import mongoose from 'mongoose';
import MesaSchema from '../models/mesa.js'

const Mesa = mongoose.model('mesas', MesaSchema)

export const getMesa= async (req, res) => {
  try{
      const data = await Mesa.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneMesa = async (req, res) => {
  try{
      const data = await Mesa.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createMesa = async (req, res) => {
  const data = new Mesa({
      CodigoMesa: req.body.CodigoMesa,
      NombreMesa: req.body.NombreMesa,
      NumeroMesa: req.body.NumeroMesa,
      CantidadSillasMesa: req.body.CantidadSillasMesa,
      CodigoRestaurante: req.body.CodigoRestaurante
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateMesa = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Mesa.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteMesa= async (req, res) => {
  try {
      const { id } = req.params;
      await Mesa.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
