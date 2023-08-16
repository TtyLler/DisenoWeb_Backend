import mongoose from 'mongoose';
import ProveedorSchema from '../models/proveedor.js'

const Proveedor = mongoose.model('proveedor', ProveedorSchema)

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
      CodigoProv: req.body.CodigoProv,
      NombreProv: req.body.NombreProv,
      ApellidoProv: req.body.ApellidoProv,
      TelefonoProv: req.body.TelefonoProv,
      CelularProv: req.body.CelularProv,
     
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
      await Proveedor.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
