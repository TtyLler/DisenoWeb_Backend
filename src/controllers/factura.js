import mongoose from 'mongoose';
import FacturaSchema from '../models/factura.js'

const Factura = mongoose.model('facturas', FacturaSchema)

export const getFactura= async (req, res) => {
  try{
      const data2 = await Factura.find({
        FechaHoraFactura: {
          $gte: new Date().toJSON().slice(0, 10), 
          $lt: new Date(Date.now())
        }
      })
      const data = await Factura.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneFactura = async (req, res) => {
  try{
      const data = await Factura.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createFactura = async (req, res) => {
  const data = new Factura({
    FechaHoraFactura: req.body.FechaHoraFactura,
    CodigoCaja: req.body.CodigoCaja,
    CodigoRestaurante: req.body.CodigoRestaurante,
    CodigoEmpleado: req.body.CodigoEmpleado,
    EntradaDeDinero: req.body.EntradaDeDinero,
    DescripcionFactura: req.body.DescripcionFactura
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateFactura = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Factura.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteFactura= async (req, res) => {
  try {
      const { id } = req.params;
      await Factura.findByIdAndDelete(id)
      res.json({msg: 'Factura has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const getTodayFacturas= async (req, res) => {
  try{
      const data = await Factura.find({
        FechaHoraFactura: {
          $gte: new Date().toJSON().slice(0, 10), 
          $lt: new Date(Date.now())
        }
      })
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
