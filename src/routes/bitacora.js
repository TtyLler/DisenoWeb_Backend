import { Router } from "express";
import { getBitacora, getOneBitacora, createBitacora, updateBitacora, deleteBitacora} from '../controllers/bitacora.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/bitacoras', getBitacora)
router.get('/bitacoras/:id', getOneBitacora)
router.post('/bitacoras', createBitacora)
router.put('/bitacoras/:id',updateBitacora)
router.delete('/bitacoras/:id',deleteBitacora)

export default router;