import { Router} from "express";
import { getCart, getOneCart, createCart, updateCart, deleteCart} from '../controllers/cart.js'

const router = Router();

router.get('/carts', getCart)
router.get('/carts/:id', getOneCart)
router.post('/carts', createCart)
router.put('/carts/:id',updateCart)
router.delete('/carts/:id', deleteCart)

export default router;
