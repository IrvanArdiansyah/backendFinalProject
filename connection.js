const mysql = require("mysql");

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'Irvan',
    password: 'Numpit27',
    database: 'arsenic'
});

db.connect()
module.exports = db;