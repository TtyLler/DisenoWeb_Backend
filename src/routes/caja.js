import { Router} from "express";
import { getCaja, getOneCaja, createCaja, updateCaja, deleteCaja} from '../controllers/caja.js'

const router = Router();

router.get('/cajas', getCaja)
router.get('/cajas/:id', getOneCaja)
router.post('/cajas', createCaja)
router.put('/cajas/:id',updateCaja)
router.delete('/cajas/:id', deleteCaja)

export default router;
