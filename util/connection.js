var mysql = require('mysql');
var connectionpool = mysql.createPool({
    host     : 'ajthings.com',
    user     : 'testuser',
    password : 'test1234',
    database : 'testdb'
});

exports.get = function (callback) {
    connectionpool.getConnection(callback);
};