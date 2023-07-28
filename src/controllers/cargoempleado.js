import mongoose from 'mongoose';
import CargoEmpleadoSchema from '../models/cargoempleado.js'

const CargoEmpleado = mongoose.model('cargosempleados', CargoEmpleadoSchema)

export const getCargoEmpleado= async (req, res) => {
  try{
      const data = await CargoEmpleado.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneCargoEmpleado = async (req, res) => {
  try{
      const data = await CargoEmpleado.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createCargoEmpleado = async (req, res) => {
  const data = new CargoEmpleado({
      CodigoEmpleado: req.body.CodigoEmpleado,
      DescripcionCargo: req.body.DescripcionCargo,
      CodigoPais: req.body.CodigoPais,
      CodigoRol: req.body.CodigoRol
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateCargoEmpleado = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await CargoEmpleado.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteCargoEmpleado= async (req, res) => {
  try {
      const { id } = req.params;
      await CargoEmpleado.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
