const express = require('express');
const router = express.Router();
const { getAll, getById, create, edit, remove } = require('../../models/alumnos');

// GET http://localhost:3000/api/alumnos
router.get('/', (req, res) => {
    getAll()
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});

// GET http://localhost:3000/api/alumnos/:alumnoId
router.get('/:alumnoId', (req, res) => {
    getById(req.params.alumnoId)
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});

// POST http://localhost:3000/api/alumnos
router.post('/', (req, res) => {
    create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

// PUT http://localhost:3000/api/alumnos/23
router.put('/:alumnoId', (req, res) => {
    edit(req.params.alumnoId, req.body)
        .then(result => {
            getById(req.params.alumnoId)
                .then(rows => res.json(rows))
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

// DELETE http://localhost:3000/api/alumnos/23
router.delete('/:alumnoId', (req, res) => {
    remove(req.params.alumnoId)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

module.exports = router;