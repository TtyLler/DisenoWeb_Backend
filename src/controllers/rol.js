import mongoose from 'mongoose';
import RolSchema from '../models/rol.js'

const Rol = mongoose.model('roles', RolSchema)

export const getRol= async (req, res) => {
  try{
      const data = await Rol.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneRol = async (req, res) => {
  try{
      const data = await Rol.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createRol = async (req, res) => {
  const data = new Rol({
      CodigoRol: req.body.CodigoRol,
      DescripcionRol: req.body.DescripcionRol      
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateRol = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Rol.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteRol= async (req, res) => {
  try {
      const { id } = req.params;
      await Rol.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
