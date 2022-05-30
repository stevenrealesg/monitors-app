var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config()

var connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'university'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting database: ' + err.stack);
        return;
    }
    console.log('connected database as id ' + connection.threadId);
});

module.exports = connection