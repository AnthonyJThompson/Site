var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index1', { title: 'Home Page', layout: '' });
});

module.exports = router;
