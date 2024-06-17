

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM modulos', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM modulos WHERE id =' + id, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const create = ({ nombre, idProfesor }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO modulos (nombre, idProfesor) values (?, ?);',
            [nombre, idProfesor],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
};

const edit = (moduloId, { nombre, idProfesor}) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE modulos SET nombre = ?, idProfesor = ? WHERE id = ?',
            [nombre, idProfesor],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

const remove = (moduloId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'DELETE FROM modulos WHERE id = ?',
            [moduloId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        });
    }

module.exports = {
    getAll: getAll,
    getById: getById,
    create: create,
    edit: edit,
    remove: remove
}