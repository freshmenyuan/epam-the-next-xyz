var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
// note that typically data would NOT be loaded from the filesystem in this manner :)

router.get('/articles', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "X-Requestd-With");
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

	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "X-Requestd-With");
	Article.findOne({"id": Number(req.params.id)}, function(err, data){
    if (err) {
    	throw err;
    }else{
    	console.log(data);
			res.json(data);

    }
  });
});

router.post('/register', function(req, res, next){
	console.log(req.body);
       var article = new Article(req.body);
       article.save(function(err){
         if(err) throw err;
         else  res.send(req.body);
     });
});

module.exports = router;

