var express = require('express');
var router = express.Router();
var connection = require('../util/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.get(function(err, c) {
    c.query('select * from mytest', function (err, rows) {
      c.release();
      res.render('users', { title: 'Users Page', list: rows });
    })
  })
});

module.exports = router;
