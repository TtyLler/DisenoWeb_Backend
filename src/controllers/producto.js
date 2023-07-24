import mongoose from 'mongoose';
import ProductoSchema from '../models/producto.js'

const Producto = mongoose.model('productos', ProductoSchema)

export const getProducto= async (req, res) => {
  try{
      const data = await Producto.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneProducto = async (req, res) => {
  try{
      const data = await Producto.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createProducto = async (req, res) => {
  const data = new Producto({
      CodigoProducto: req.body.CodigoProducto,
      CodigoMarca: req.body.CodigoMarca,
      TipoProducto: req.body.TipoProducto
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateProducto = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Producto.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteProducto= async (req, res) => {
  try {
      const { id } = req.params;
      const data = await Producto.findByIdAndDelete(id)
      res.send(`Producto "${data.Marca}" has been deleted`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
