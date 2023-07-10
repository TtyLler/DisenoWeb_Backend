import mongoose from 'mongoose';
import BebidaSchema from '../models/bebida.js'

const Bebida = mongoose.model('bebidas', BebidaSchema)

export const getBebida= async (req, res) => {
  try{
      const data = await Bebida.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneBebida = async (req, res) => {
  try{
      const data = await Bebida.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createBebida = async (req, res) => {
  const data = new Bebida({
      CodigoBebida: req.body.CodigoBebida,
      TipoBebida: req.body.TipoBebida,
      Marca: req.body.Marca,
      Precio: req.body.Precio,
      CodigoRestaurante: req.body.CodigoRestaurante,
      Pais: req.body.Pais,
      CodigoMedida: req.body.CodigoMedida,
      Ano: req.body.Ano
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateBebida = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Bebida.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteBebida= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Bebida.findByIdAndDelete(id)
      res.send(`Beverage "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
