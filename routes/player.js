var express = require('express');
var router = express.Router();
var connection = require('../util/connection');
var request = require('request');
var parseString = require('xml2js').parseString;

router.get('/', function(req, res, next) {
  setTimeout(function(){
    res.render('player.ejs', {layout: ''});
  }, 1000)

  return;
  res.render('player.ejs', {layout: ''});
});

router.get('/api/parseurl', function(req, res, next) {
  var url = req.query.url;
  url = decodeURIComponent(url);
  console.log(url);
  request(url, function (error, response, body) {
    parseString(body, function (err, result) {
      var items = [];
      var image = "";
      //console.log(result.rss.channel[0])
      try {
        image = result.rss.channel[0].image[0].url[0];
        console.log(result.rss.channel[0].image);
        if (image == "") {
          image = result.rss.channel[0]['itunes:image'][0].$.href;
        }
      }
      catch(error) {

      }
      result.rss.channel[0].item.forEach(el => {
        items.push({ file: el.enclosure[0].$.url, thumb: image, trackName: el.title[0], trackArtist: el.description[0], trackAlbum: "" });
      });
      res.json(items);
    });
  });
})

module.exports = router;
