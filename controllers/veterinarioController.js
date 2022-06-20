import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  // Prevenir Usarios registrados
  const existeEmail = await Veterinario.findOne({ email });

  if (existeEmail) {
    const error = new Error('Usuario ya registrado')
    return res.status(400).json({msg: error.message})
  }

  try {
    // Guardar un Nuevo Veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  res.json({ msg: "mostrando perfil" });
};

export { registrar, perfil };
