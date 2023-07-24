import mongoose from 'mongoose';
import ComestibleSchema from '../models/comestible.js'

const Comestible = mongoose.model('comestibles', ComestibleSchema)

export const getComestible= async (req, res) => {
  try{
      const data = await Comestible.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneComestible = async (req, res) => {
  try{
      const data = await Comestible.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createComestible = async (req, res) => {
  const data = new Comestible({
      CodigoComestible: req.body.CodigoComestible,
      DescripcionComestible: req.body.DescripcionComestible,
      CantidadComestible: req.body.CantidadComestible,
      CodigoRestaurante: req.body.CodigoRestaurante,
      TipoComestible: req.body.TipoComestible
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateComestible = async (req, res) => {
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

export const deleteComestible= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Bebida.findByIdAndDelete(id)
      res.send(`Comestible "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
