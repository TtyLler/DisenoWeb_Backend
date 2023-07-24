import { Router} from "express";
import { getLimpieza, getOneLimpieza, createLimpieza, updateLimpieza, deleteLimpieza} from '../controllers/limpieza.js'

const router = Router();

router.get('/tecnologias', getLimpieza)
router.get('/tecnologias/:id', getOneLimpieza)
router.post('/tecnologias', createLimpieza)
router.put('/tecnologias/:id',updateLimpieza)
router.delete('/tecnologias/:id', deleteLimpieza)

export default router;
