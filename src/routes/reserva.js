import { Router} from "express";
import { getReserva, getOneReserva, createReserva, updateReserva, deleteReserva, userReserva} from '../controllers/reserva.js'

const router = Router();

router.get('/reservas', getReserva)
router.get('/reservas/:id', getOneReserva)
router.post('/reservas', createReserva)
router.put('/reservas/:id',updateReserva)
router.delete('/reservas/:id', deleteReserva)
router.get('/reservasuser/:id', userReserva)

export default router;
