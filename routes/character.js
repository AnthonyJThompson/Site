var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('character/index', { title: 'Character', layout: '' });
});

module.exports = router;
