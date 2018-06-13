var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.xhr) {
    res.render('index', { title: 'Home Page', layout: '' });
  }
  else {
    res.render('index', { title: 'Home Page' });
  }
});

module.exports = router;
