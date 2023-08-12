import { Router} from "express";
import { signUpUsuario } from "../controllers/signup.js";

const router = Router();

router.post('/signup', signUpUsuario)

export default router;