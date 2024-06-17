const mysql = require('mysql2');

exports.connect = function (done) {
    let pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'WDWO',
        port: 8889
    })
    global.db = pool;
}