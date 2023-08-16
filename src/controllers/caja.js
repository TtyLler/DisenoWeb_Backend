import mongoose from 'mongoose';
import CajaSchema from '../models/caja.js'

const Caja = mongoose.model('cajas', CajaSchema)

export const getCaja= async (req, res) => {
  try{
      const data = await Caja.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneCaja = async (req, res) => {
  try{
      const data = await Caja.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createCaja = async (req, res) => {
  const data = new Caja({
      CodigoCaja: req.body.CodigoCaja,
      CodigoRestaurante: req.body.CodigoRestaurante,
      CodigoEmpleado: req.body.CodigoEmpleado,
      Descripcion: req.body.Descripcion,
      EntradaDeDinero: req.body.EntradaDeDinero
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateCaja = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Caja.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteCaja= async (req, res) => {
  try {
      const { id } = req.params;
      await Caja.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
