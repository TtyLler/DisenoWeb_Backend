import mongoose from 'mongoose';
import MarcaSchema from '../models/marca.js'

const Marca = mongoose.model('marcas', MarcaSchema)

export const getMarca= async (req, res) => {
  try{
      const data = await Marca.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneMarca = async (req, res) => {
  try{
      const data = await Marca.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createMarca = async (req, res) => {
  const data = new Marca({
      CodigoMarca: req.body.CodigoMarca,
      CodigoProveedor: req.body.CodigoProveedor
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateMarca = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Marca.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteMarca= async (req, res) => {
  try {
      const { id } = req.params;
      await Marca.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
