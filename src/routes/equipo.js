import { Router} from "express";
import { getEquipo, getOneEquipo, createEquipo, updateEquipo, deleteEquipo} from '../controllers/equipo.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/equipos', getEquipo)
router.get('/equipos/:id', getOneEquipo)
router.post('/equipos', createEquipo)
router.put('/equipos/:id',updateEquipo)
router.delete('/equipos/:id',deleteEquipo)

export default router;