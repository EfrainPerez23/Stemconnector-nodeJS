const mysql = require('mysql');

// Create Connection

const db = mysql.createConnection({
    host: '165.227.183.92',
    user: 'client',
    password: 'STEM20!7',
    database: 'shecDB',
});

module.exports = db;