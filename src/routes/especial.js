import { Router} from "express";
import { getEspecial, getOneEspecial, createEspecial, updateEspecial, deleteEspecial} from '../controllers/especial.js'

const router = Router();

router.get('/especiales', getEspecial)
router.get('/especiales/:id', getOneEspecial)
router.post('/especiales', createEspecial)
router.put('/especiales/:id',updateEspecial)
router.delete('/especiales/:id', deleteEspecial)

export default router;
