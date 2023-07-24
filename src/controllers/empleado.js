import mongoose from 'mongoose';
import EmpleadoSchema from '../models/empleado.js'

const Empleado = mongoose.model('empleados', EmpleadoSchema)

export const getEmpleado= async (req, res) => {
  try{
      const data = await Empleado.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneEmpleado = async (req, res) => {
  try{
      const data = await Empleado.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createEmpleado = async (req, res) => {
  const data = new Empleado({
      CodigoEmpleado: req.body.CodigoEmpleado,
      NombreEmpleado: req.body.NombreEmpleado,
      CodigoUsuario: req.body.CodigoUsuario,
      CodigoRestaurante: req.body.CodigoRestaurante,
      Cedula: req.body.Cedula,
      Telefonos: req.body.Telefonos
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateEmpleado = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Empleado.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteEmpleado= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Empleado.findByIdAndDelete(id)
      res.send(`Empleado "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
