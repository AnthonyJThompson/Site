var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'testuser',
    password : 'test1234',
    database : 'testdb'
});

exports = connection;
