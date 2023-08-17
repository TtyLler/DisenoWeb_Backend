import { Router} from "express";
import { getRol, getOneRol, createRol, updateRol, deleteRol} from '../controllers/rol.js'

const router = Router();

router.get('/roles', getRol)
router.get('/roles/:id', getOneRol)
router.post('/roles', createRol)
router.put('/roles/:id',updateRol)
router.delete('/roles/:id', deleteRol)

export default router;
