import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import veterinarioRoutes from "./routes/veterinariosRoutes.js";
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callbacks) {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      // El origen del request esta permitdo
      callbacks(null, true);
    } else {
      callbacks(new Error("No permitido por CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/api/veterinarios", veterinarioRoutes);
app.use("/api/pacientes", pacienteRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
