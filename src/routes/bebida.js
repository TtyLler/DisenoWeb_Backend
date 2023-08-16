import { Router} from "express";
import { getBebida, getOneBebida, createBebida, updateBebida, deleteBebida} from '../controllers/bebida.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/bebidas', getBebida)
router.get('/bebidas/:id', getOneBebida)
router.post('/bebidas', createBebida)
router.put('/bebidas/:id',updateBebida)
router.delete('/bebidas/:id',deleteBebida)

export default router;