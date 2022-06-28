import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarPassword,
  nuevoPassword,
  actualizarPerfil
} from "../controllers/veterinarioController.js";

import checkAuth from "../middleware/authMiddleware.js";

// Area Publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
// router.get("/olvide-password/:token", comprobarPassword);
// router.post("/olvide-password/:token", nuevoPassword);

router
  .route("/olvide-password/:token")
  .get(comprobarPassword)
  .post(nuevoPassword);

// Area Privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil)

export default router;
