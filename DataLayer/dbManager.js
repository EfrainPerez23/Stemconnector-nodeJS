const mysql = require('mysql');

// Create Connection

const db = mysql.createConnection({
    host: '138.197.89.43',
    user: 'user',
    password: 'stemconnector',
    database: 'mydb',
});

module.exports = db;