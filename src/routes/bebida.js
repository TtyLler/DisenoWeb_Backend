import { Router} from "express";
import { getBebida, getOneBebida, createBebida, updateBebida, deleteBebida} from '../controllers/bebida.js'

const router = Router();

router.get('/bebidas', getBebida)
router.get('/bebidas/:id', getOneBebida)
router.post('/bebidas', createBebida)
router.put('/bebidas/:id',updateBebida)
router.delete('/bebidas/:id',deleteBebida)

export default router;