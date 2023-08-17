import { Router} from "express";
import { getEmpleado, getOneEmpleado, createEmpleado, updateEmpleado, deleteEmpleado} from '../controllers/empleado.js'

const router = Router();

router.get('/empleados', getEmpleado)
router.get('/empleados/:id', getOneEmpleado)
router.post('/empleados', createEmpleado)
router.put('/empleados/:id',updateEmpleado)
router.delete('/empleados/:id', deleteEmpleado)

export default router;
