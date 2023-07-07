import { Router} from "express";
import { getRestaurant, getOneRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurante.js'

const router = Router();

router.get('/restaurants', getRestaurant)
router.get('/restaurants/:id', getOneRestaurant)
router.post('/restaurants', createRestaurant)
router.put('/restaurants/:id',updateRestaurant)
router.delete('/restaurants/:id',deleteRestaurant)

export default router;