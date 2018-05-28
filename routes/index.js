var express = require('express');
var router = express.Router();
var connection = require('../util/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.get(function(err, c) {
    c.query("select * from blogs", function (err, rows) {
        res.render('index', { title: 'Home Page', blogs: rows });
    })
  })
});

module.exports = router;
