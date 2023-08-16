import { Router} from "express";
import { getProveedor, getOneProveedor, createProveedor, updateProveedor, deleteProveedor} from '../controllers/proveedor.js'

const router = Router();

router.get('/proveedor', getProveedor)
router.get('/proveedor/:id', getOneProveedor)
router.post('/proveedor', createProveedor)
router.put('/proveedor/:id',updateProveedor)
router.delete('/proveedor/:id', deleteProveedor)

export default router;
