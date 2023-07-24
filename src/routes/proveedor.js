import { Router} from "express";
import { getProveedor, getOneProveedor, createProveedor, updateProveedor, deleteProveedor} from '../controllers/proveedor.js'

const router = Router();

router.get('/proveedores', getProveedor)
router.get('/proveedores/:id', getOneProveedor)
router.post('/proveedores', createProveedor)
router.put('/proveedores/:id',updateProveedor)
router.delete('/proveedores/:id', deleteProveedor)

export default router;
