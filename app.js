// include and setup express
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/epam');
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
  id : Number,
  title:String,
  url:String,
  img:String,
  uername:String,
  date:Date
});

mongoose.model('Article', ArticlesSchema);



// include express handlebars (templating engine)
var exphbs  = require('express-handlebars');

// specify the layout for our handlebars template
var hbs = exphbs.create({defaultLayout: 'main'});

// crethe the express app
var app = express();

var api = require('./routes/api');
app.use('/api', api);
// setup handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// express middleware that parser the key-value pairs sent in the request body in the format of our choosing (e.g. json)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup our public directory (which will serve any file stored in the 'public' directory)
app.use(express.static('public'));

app.use(function (req, res, next) {
 res.locals.scripts = [];
 next();
});

// respond to the get request with the home page
app.get('/', function (req, res) {
    res.locals.scripts.push('/js/home.js');
    res.render('home');
});

app.get('/articles/:id', function(req, res, next) {

  var fs = require('fs');
  var obj;
  fs.readFile('./data/articles.json', 'utf8', function (err, data) {
    if (err) throw err;

    data = _.filter(JSON.parse(data), function(item) {
        return item.id == req.params.id;
    });

    res.render("article",{"name":data[0].title});

  });
});

// respond to the get request with the about page
app.get('/about', function(req, res) {
  res.render('about');
});

// respond to the get request with the register page
app.get('/register', function(req, res) {
  res.render('register');
});

// handle the posted registration data
app.post('/register', function(req, res) {

  // get the data out of the request (req) object
  // store the user in memory here

  res.redirect('/dashboard');
});

// respond to the get request with dashboard page (and pass in some data into the template / note this will be rendered server-side)
app.get('/dashboard', function (req, res) {
    res.render('dashboard', {
    	stuff: [{
		    greeting: "Hello",
		    subject: "World!"
		}]
    });
});

// the api (note that typically you would likely organize things a little differently to this)


// create the server based on express
var server = require('http').createServer(app);

// start the server
server.listen(1337, '127.0.0.1', function () {
  console.log('The Next Glass Of Wine is looking good! Open http://localhost:%d to begin.', 1337);
});