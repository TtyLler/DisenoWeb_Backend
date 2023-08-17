import { Router} from "express";
import { getProducto, getOneProducto, createProducto, updateProducto, deleteProducto} from '../controllers/producto.js'

const router = Router();

router.get('/productos', getProducto)
router.get('/productos/:id', getOneProducto)
router.post('/productos', createProducto)
router.put('/productos/:id',updateProducto)
router.delete('/productos/:id', deleteProducto)

export default router;
