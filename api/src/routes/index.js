const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rutaDog = require("./routers");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", rutaDog);

module.exports = router;
