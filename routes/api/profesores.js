const express = require('express');
const router = express.Router();
const { getAll, getById, create, edit, remove } = require('../../models/profesores');

// GET http://localhost:3000/api/profesores
router.get('/', (req, res) => {
    getAll()
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});

// GET http://localhost:3000/api/profesores/:profesorId
router.get('/:profesorId', (req, res) => {
    getById(req.params.profesorId)
        .then(rows => res.json(rows))
        .catch(error => res.json({ error: error.message }));
});

// POST http://localhost:3000/api/profesores
router.post('/', (req, res) => {
    create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

// PUT http://localhost:3000/api/profesores/23
router.put('/:profesorId', (req, res) => {
    edit(req.params.profesorId, req.body)
        .then(result => {
            getById(req.params.profesorId)
                .then(rows => res.json(rows))
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

// DELETE http://localhost:3000/api/profesores/23
router.delete('/:profesorId', (req, res) => {
    remove(req.params.profesorId)
        .then(result => res.json(result))
        .catch(error => res.json({ error: error.message }));
});

module.exports = router;