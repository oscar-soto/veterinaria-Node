import express from "express";
const router = express.Router();
import { registrar, perfil, confirmar, autenticar } from "../controllers/veterinarioController.js";

router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);


router.get("/perfil", perfil);

export default router;
