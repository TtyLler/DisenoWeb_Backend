import mongoose from 'mongoose';
import ProveedorSchema from '../models/proveedor.js'

const Proveedor = mongoose.model('proveedores', ProveedorSchema)

export const getProveedor= async (req, res) => {
  try{
      const data = await Proveedor.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneProveedor = async (req, res) => {
  try{
      const data = await Proveedor.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createProveedor = async (req, res) => {
  const data = new Proveedor({
      CodigoProveedor: req.body.CodigoProveedor,
      NombreProveedor: req.body.NombreProveedor,
      CodigoActivo: req.body.CodigoActivo,
      CodigoPais: req.body.CodigoPais,
      CodigoRestaurante: req.body.CodigoRestaurante,
      Telefono: req.body.Telefono
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateProveedor = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Proveedor.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteProveedor= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Proveedor.findByIdAndDelete(id)
      res.send(`Proveedor "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
