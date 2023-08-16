import { Router} from "express";
import { getTecnologia, getOneTecnologia, createTecnologia, updateTecnologia, deleteTecnologia} from '../controllers/tecnologia.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/tecnologias', getTecnologia)
router.get('/tecnologias/:id', getOneTecnologia)
router.post('/tecnologias', createTecnologia)
router.put('/tecnologias/:id',updateTecnologia)
router.delete('/tecnologias/:id',deleteTecnologia)

export default router;