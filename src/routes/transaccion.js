import { Router} from "express";
import { getTransaccion, getOneTransaccion, createTransaccion, updateTransaccion, deleteTransaccion} from '../controllers/transaccion.js'

const router = Router();

router.get('/transacciones', getTransaccion)
router.get('/transacciones/:id', getOneTransaccion)
router.post('/transacciones', createTransaccion)
router.put('/transacciones/:id',updateTransaccion)
router.delete('/transacciones/:id', deleteTransaccion)

export default router;
