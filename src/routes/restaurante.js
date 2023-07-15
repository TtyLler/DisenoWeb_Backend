import { Router} from "express";
import { getRestaurant, getOneRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/restaurante.js'

//function that allows us to define routes for our application
const router = Router();

//defining a route for every request method, when the route is accessed, it will call the specific method for the specific route
router.get('/restaurants', getRestaurant)
router.get('/restaurants/:id', getOneRestaurant)
router.post('/restaurants', createRestaurant)
router.put('/restaurants/:id',updateRestaurant)
router.delete('/restaurants/:id',deleteRestaurant)

export default router;