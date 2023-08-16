import { Router} from "express";
import { getMedida, getOneMedida, createMedida, updateMedida, deleteMedida} from '../controllers/medida.js'

const router = Router();

router.get('/medidas', getMedida)
router.get('/medidas/:id', getOneMedida)
router.post('/medidas', createMedida)
router.put('/medidas/:id',updateMedida)
router.delete('/medidas/:id', deleteMedida)

export default router;
