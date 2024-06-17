

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores WHERE id =' + id, (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        })
    });
}

const create = ({ nombre, apellidos, sexo }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO profesores (nombre, apellidos, sexo) values (?, ?, ?);',
            [nombre, apellidos, sexo],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
};

const edit = (profesorId, { nombre, apellidos, sexo }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE profesores SET nombre = ?, apellidos = ?, sexo = ? WHERE id = ?',
            [nombre, apellidos, sexo, profesorId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

const remove = (profesorId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'DELETE FROM profesores WHERE id = ?',
            [profesorId],
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