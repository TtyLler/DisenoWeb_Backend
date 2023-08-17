import { Router} from "express";
import { getComestible, getOneComestible, createComestible, updateComestible, deleteComestible} from '../controllers/comestible.js'

const router = Router();

router.get('/comestibles', getComestible)
router.get('/comestibles/:id', getOneComestible)
router.post('/comestibles', createComestible)
router.put('/comestibles/:id',updateComestible)
router.delete('/comestibles/:id', deleteComestible)

export default router;
