

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM alumnos', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM alumnos WHERE id =' + id, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const create = ({ nombre, apellidos, sexo, nacimiento, promedio }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO alumnos (nombre, apellidos, sexo, nacimiento, promedio) values (?, ?, ?, ?, ?);',
            [nombre, apellidos, sexo, nacimiento, promedio],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
};

const edit = (alumnoId, { nombre, apellidos, sexo, nacimiento, promedio }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE alumnos SET nombre = ?, apellidos = ?, sexo = ?, nacimiento = ?, promedio = ? WHERE id = ?',
            [nombre, apellidos, sexo, nacimiento, promedio, alumnoId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

const remove = (alumnoId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'DELETE FROM alumnos WHERE id = ?',
            [alumnoId],
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