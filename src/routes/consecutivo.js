import { Router} from "express";
import { getConsecutivo, getOneConsecutivo, createConsecutivo, updateConsecutivo, deleteConsecutivo } from '../controllers/consecutivo.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/consecutivos', getConsecutivo)
router.get('/consecutivos/:id', getOneConsecutivo)
router.post('/consecutivos', createConsecutivo)
router.put('/consecutivos/:id',updateConsecutivo)
router.delete('/consecutivos/:id',deleteConsecutivo)

export default router;