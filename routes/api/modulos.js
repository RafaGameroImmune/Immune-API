const express = require('express');
const router = express.Router();
const { getAll, getById, create, edit, remove } = require('../../models/modulos');
const { getById: getProfesorById } = require('../../models/profesores');

// GET http://localhost:3000/api/modulos
router.get('/', (req, res) => {
    getAll()
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});

// GET http://localhost:3000/api/modulos/:moduloId
router.get('/:moduloId', (req, res) => {
    getById(req.params.moduloId)
        .then(rows => {
            const modulo = rows[0];
            getProfesorById(modulo.idProfesor)
                .then(profesores => {
                    modulo.profesor = profesores[0]
                    res.json(modulo)
                })
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

// POST http://localhost:3000/api/modulos
router.post('/', (req, res) => {
    create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

// PUT http://localhost:3000/api/modulos/23
router.put('/:moduloId', (req, res) => {
    edit(req.params.moduloId, req.body)
        .then(result => {
            getById(req.params.moduloId)
                .then(rows => res.json(rows))
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

// DELETE http://localhost:3000/api/modulos/23
router.delete('/:moduloId', (req, res) => {
    remove(req.params.moduloId)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

module.exports = router;