import mongoose from 'mongoose';
import CartSchema from '../models/cart.js'

const Cart = mongoose.model('carts', CartSchema)

export const getCart= async (req, res) => {
  try{
      const data = await Cart.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const getOneCart = async (req, res) => {
  try{
      const data = await Cart.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}

export const createCart = async (req, res) => {
  const data = new Cart({
    CodigoCart: req.body.CodigoCart,
    NombreProductoCart: req.body.NombreProductoCart,
    CantidadCart: req.body.CantidadCart,
    MesaCart: req.body.MesaCart,
    PrecioCart: req.body.PrecioCart,
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}

export const updateCart = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Cart.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}

export const deleteCart= async (req, res) => {
  try {
      const { id } = req.params;
      await Cart.findByIdAndDelete(id)
      res.json({msg: 'Cart has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
