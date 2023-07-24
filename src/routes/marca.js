import { Router} from "express";
import { getMarca, getOneMarca, createMarca, updateMarca, deleteMarca} from '../controllers/marca.js'

const router = Router();

router.get('/marcas', getMarca)
router.get('/marcas/:id', getOneMarca)
router.post('/marcas', createMarca)
router.put('/marcas/:id',updateMarca)
router.delete('/marcas/:id', deleteMarca)

export default router;
