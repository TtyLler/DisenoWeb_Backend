import { Router} from "express";
import { getPais, getOnePais, createPais, updatePais, deletePais } from '../controllers/pais.js'

const router = Router();

router.get('/paises', getPais)
router.get('/paises/:id', getOnePais)
router.post('/paises', createPais)
router.put('/paises/:id',updatePais)
router.delete('/paises/:id', deletePais)

export default router;
