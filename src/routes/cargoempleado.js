import { Router} from "express";
import { getCargoEmpleado, getOneCargoEmpleado, createCargoEmpleado, updateCargoEmpleado, deleteCargoEmpleado} from '../controllers/cargoempleado.js'

const router = Router();

router.get('/cargosempleados', getCargoEmpleado)
router.get('/cargosempleados/:id', getOneCargoEmpleado)
router.post('/cargosempleados', createCargoEmpleado)
router.put('/cargosempleados/:id',updateCargoEmpleado)
router.delete('/cargosempleados/:id', deleteCargoEmpleado)

export default router;
