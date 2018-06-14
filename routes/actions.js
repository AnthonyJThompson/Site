var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('actions/index', { title: 'Actions', layout: '' });
});

module.exports = router;
