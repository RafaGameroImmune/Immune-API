const express = require('express');

const router = express.Router();

// Recuperamos el fichero con los manejadores para la api de alumnos
const alumnosRouter = require('./api/alumnos');
// Delegamos todas las peticiones con el prefijo /api/alumnos al fichero anterior
router.use('/alumnos', alumnosRouter);

// Recuperamos el fichero con los manejadores para la api de profesores
const profesoresRouter = require('./api/profesores');
// Delegamos todas las peticiones con el prefijo /api/profesores al fichero anterior
router.use('/profesores', profesoresRouter);

// Recuperamos el fichero con los manejadores para la api de modulos
const modulosRouter = require('./api/modulos');
// Delegamos todas las peticiones con el prefijo /api/modulos al fichero anterior
router.use('/modulos', modulosRouter);

module.exports = router;