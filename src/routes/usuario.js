import { Router} from "express";
import { getUsuario, getOneUsuario, createUsuario, updateUsuario, deleteUsuario} from '../controllers/usuario.js'

const router = Router();

router.get('/usuarios', getUsuario)
router.get('/usuarios/:id', getOneUsuario)
router.post('/usuarios', createUsuario)
router.put('/usuarios/:id',updateUsuario)
router.delete('/usuarios/:id', deleteUsuario)

export default router;
