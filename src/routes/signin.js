import { Router} from "express";
import { signInUsuario } from "../controllers/signin.js";

const router = Router();

router.post('/signin', signInUsuario)

export default router;