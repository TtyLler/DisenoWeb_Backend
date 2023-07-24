import { Router} from "express";
import { getCliente, getOneCliente, createCliente, updateCliente, deleteCliente} from '../controllers/cliente.js'

const router = Router();

router.get('/clientes', getCliente)
router.get('/clientes/:id', getOneCliente)
router.post('/clientes', createCliente)
router.put('/clientes/:id',updateCliente)
router.delete('/clientes/:id', deleteCliente)

export default router;
