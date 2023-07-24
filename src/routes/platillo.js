import { Router} from "express";
import { getPlatillo, getOnePlatillo, createPlatillo, updatePlatillo, deletePlatillo} from '../controllers/platillo.js'

const router = Router();

router.get('/platillos', getPlatillo)
router.get('/platillos/:id', getOnePlatillo)
router.post('/platillos', createPlatillo)
router.put('/platillos/:id',updatePlatillo)
router.delete('/platillos/:id', deletePlatillo)

export default router;
