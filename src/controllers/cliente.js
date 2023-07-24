import mongoose from 'mongoose';
import ClienteSchema from '../models/cliente.js'

const Cliente = mongoose.model('clientes', ClienteSchema)

export const getCliente= async (req, res) => {
  try{
      const data = await Cliente.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneCliente = async (req, res) => {
  try{
      const data = await Cliente.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createCliente = async (req, res) => {
  const data = new Cliente({
      CodigoCliente: req.body.CodigoCliente,
      NombreCliente: req.body.NombreCliente,
      MontoPagadoCliente: req.body.MontoPagadoCliente
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateCliente = async (req, res) => {
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

export const deleteCliente= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Cliente.findByIdAndDelete(id)
      res.send(`Cliente "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
