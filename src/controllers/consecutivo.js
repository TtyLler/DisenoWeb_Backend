import mongoose from 'mongoose';
import ConsecutivoSchema from '../models/consecutivo.js'

//allows you to perform CRUD operations on the specific collection of the database using the corresponding schema
const Consecutivo = mongoose.model('consecutivos', ConsecutivoSchema)

//retrieves all data and sends it as a JSON response
export const getConsecutivo= async (req, res) => {
  try{
      const data = await Consecutivo.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//retrieves data by its ID and sends the data as a JSON
export const getOneConsecutivo = async (req, res) => {
  try{
      const data = await Consecutivo.findById(req.params.id);
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
}
//creates a new record in a database using the data provide in the request body.
export const createConsecutivo = async (req, res) => {
  const data = new Consecutivo({
    CodigoConsecutivo: req.body.CodigoConsecutivo,
    DescripcionConsecutivo: req.body.DescripcionConsecutivo,
    PrefijoConsecutivo: req.body.PrefijoConsecutivo,
    TipoConsecutivo: req.body.TipoConsecutivo,
    ValorConsecutivo: req.body.ValorConsecutivo
  })
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
}
//updates the document in a database using the provided request parameters and body data.
export const updateConsecutivo = async (req, res) => {
  try {
      const { id } = req.params;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Consecutivo.findByIdAndUpdate(
          id, updatedData, options
      )
      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
//deletes a document from the database and sends a response with the name of the deleted document.
export const deleteConsecutivo = async (req, res) => {
  try {
      const { id } = req.params;
      await Consecutivo.findByIdAndDelete(id)
      res.json({msg: 'Entry has been Deleted'})
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
}
