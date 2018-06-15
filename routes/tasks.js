var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../util/connection');

var addSql = "INSERT INTO tasks (name, start, end) VALUES ";

router.get('/', function(req, res, next) {
    var start = new Date(2018, 5, 14, 21,30);
    var end = new Date(2018, 5, 14, 21, 45);
    res.render('tasks/index', { layout: '', start: start, end: end });
});

router.post('/add', function(req, res){
    var json = req.body;
    
    connection.get(function(err, c){
        c.query('SELECT end FROM tasks order by end desc limit 1', function(err, results){
            if (err) throw err;
            var start;
            if (results[0]){
                start = moment(results[0].end);
                console.log('found a task: '+ JSON.stringify(results))
            }
            else {
                start = moment(new Date());
                console.log('found none')
            }
            var end = start.clone().add(json.duration, 'seconds').format('YYYY-MM-DD HH:mm:ss');
            start = start.format('YYYY-MM-DD HH:mm:ss');
            var sql = addSql + "('" + json.name + "','" + start + "','" + end + "')";
            c.query(sql, function(err, result){
                if (err) throw err;
                c.release();
            });
        })
    })
    res.json({data: 'done'});
})
module.exports = router;
