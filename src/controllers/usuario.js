import mongoose from 'mongoose';
import UsuarioSchema from '../models/usuario.js'

const Usuario = mongoose.model('usuarios', UsuarioSchema)

export const getUsuario= async (req, res) => {
  try{
      const data = await Usuario.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneUsuario = async (req, res) => {
  try{
      const data = await Usuario.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createUsuario = async (req, res) => {
  const data = new Usuario({
      CodigoUsuario: req.body.CodigoUsuario,
      ContrasenaActual: req.body.ContrasenaActual,
      ContrasenaAnterior: req.body.ContrasenaAnterior      
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateUsuario = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Usuario.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteUsuario= async (req, res) => {
  try {
      const { id } = req.params;
      await Usuario.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
