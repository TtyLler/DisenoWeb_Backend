import { Router} from "express";
import { getLimpieza, getOneLimpieza, createLimpieza, updateLimpieza, deleteLimpieza} from '../controllers/limpieza.js'

const router = Router();

router.get('/limpieza', getLimpieza)
router.get('/limpieza/:id', getOneLimpieza)
router.post('/limpieza', createLimpieza)
router.put('/limpieza/:id',updateLimpieza)
router.delete('/limpieza/:id', deleteLimpieza)

export default router;
