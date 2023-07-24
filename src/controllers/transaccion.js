import mongoose from 'mongoose';
import TransaccionSchema from '../models/transaccion.js'

const Transaccion = mongoose.model('transacciones', TransaccionSchema)

export const getTransaccion= async (req, res) => {
  try{
      const data = await Transaccion.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneTransaccion = async (req, res) => {
  try{
      const data = await Transaccion.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createTransaccion = async (req, res) => {
  const data = new Transaccion({
      FechaHora: req.body.FechaHora,
      CodigoRestaurante: req.body.CodigoRestaurante,
      CodigoBebida: req.body.CodigoBebida,
      EstadoTransaccion: req.body.EstadoTransaccion
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateTransaccion = async (req, res) => {
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

export const deleteTransaccion= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Transaccion.findByIdAndDelete(id)
      res.send(`Transaccion "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
