import { Router} from "express";
import { getFood, getOneFood, createFood, updateFood, deleteFood} from '../controllers/food.js'

const router = Router();

router.get('/foods', getFood)
router.get('/foods/:id', getOneFood)
router.post('/foods', createFood)
router.put('/foods/:id',updateFood)
router.delete('/foods/:id', deleteFood)

export default router;
