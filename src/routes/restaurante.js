import { Router} from "express";
import { getRestaurant, getOneRestaurant } from '../controllers/restaurante.js'

const router = Router();

router.get('/restaurants', getRestaurant)
router.get('/restaurants/:id', getOneRestaurant)

export default router;