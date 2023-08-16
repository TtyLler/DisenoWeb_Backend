import { Router} from "express";
import { getMesa, getOneMesa, createMesa, updateMesa, deleteMesa} from '../controllers/mesa.js'

const router = Router();

router.get('/mesas', getMesa)
router.get('/mesas/:id', getOneMesa)
router.post('/mesas', createMesa)
router.put('/mesas/:id',updateMesa)
router.delete('/mesas/:id', deleteMesa)

export default router;
