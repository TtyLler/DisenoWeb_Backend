import mongoose from 'mongoose'
import UsuarioSchema from '../models/usuario.js'
import jwt from 'jsonwebtoken'

const Usuario = mongoose.model('usuarios', UsuarioSchema)

export const signInUsuario = async (req, res) => {
  const { NombreUsuario, Contrasena } = req.body
  const user = await Usuario.findOne({NombreUsuario})

  if(!user) return res.status(401).send('User not found')
  if(user.Contrasena !== Contrasena) return res.status(401).send('Wrong password')

  const token = jwt.sign({id: user._id}, process.env.SECRET_WORD)

  return res.status(200).json({token, Rol: user.Rol, NombreUsuario: user.NombreUsuario})
}