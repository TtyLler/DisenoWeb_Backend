import mongoose from 'mongoose'
import UsuarioSchema from '../models/usuario.js'
import jwt from 'jsonwebtoken'

const Usuario = mongoose.model('usuarios', UsuarioSchema)

export const signUpUsuario = async (req, res) => {
  const lastUsuario = await Usuario.find().sort({ _id: -1 }).limit(1)
  
  const data = new Usuario({
    CodigoUsuario: lastUsuario[0]['CodigoUsuario'] + 1,
    Nombre: req.body.Nombre,
    NombreUsuario: req.body.NombreUsuario,
    Contrasena: req.body.Contrasena,
    Rol: 'Cliente'
  })

  try {
    const dataToSave = await data.save()
    const token = jwt.sign({ _id: dataToSave._id }, process.env.SECRET_WORD)
    res.status(200).json({newUser: dataToSave, token})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}