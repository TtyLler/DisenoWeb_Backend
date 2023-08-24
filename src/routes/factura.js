import { Router} from "express";
import { getFactura, getOneFactura, createFactura, updateFactura, deleteFactura} from '../controllers/factura.js'

const router = Router();

router.get('/facturas', getFactura)
router.get('/facturas/:id', getOneFactura)
router.post('/facturas', createFactura)
router.put('/facturas/:id',updateFactura)
router.delete('/facturas/:id', deleteFactura)

export default router;
