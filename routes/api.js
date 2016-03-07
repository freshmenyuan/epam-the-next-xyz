var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
// note that typically data would NOT be loaded from the filesystem in this manner :)

router.get('/articles', function(req, res, next) {
	res.header("Access-Control-Allow-Oringin","*");
	res.header("Access-Control-Allow-Headers","X-Requested-With");
	Article.find({},function(err, data){
    res.json(data);
  });
});

// router.get('/articles', function(req, res, next) {

// 	var fs = require('fs');
// 	var obj;
// 	fs.readFile('./data/articles.json', 'utf8', function (err, data) {
// 	  if (err) throw err;
// 	  res.json(JSON.parse(data));
// 	});
// });

router.get('/articles/:id', function(req, res, next) {

	var fs = require('fs');
	var obj;
	fs.readFile('./data/articles.json', 'utf8', function (err, data) {
		if (err) throw err;

		data = _.filter(JSON.parse(data), function(item) {
		    return item.id == req.params.id;
		});

		res.json(data);
	});
});

module.exports = router;