// server.js

// set up ===================================

var express = require('express');  
var app = express();  // create our app with express
var mongoose = require('mongoose');  // mongoose for mongodb
var morgan = require('morgan');  // log requests to the console (express4)
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)
var methodOverride = require('method-override');  // simulate DELETE and PUT (express4)


// configuration ==================================

mongoose.connect('mongodb://admin:abc123@ds017258.mlab.com:17258/jiapei-todo-app');  // connect to mongoDB database on mongolab.com

app.use(express.static(__dirname + '/public'));  // set the static files location /public, /public/img will be /img for users
app.use(morgan('dev'));  // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));  // parse app;ocation/x-www-form-urlencoded
app.use(bodyParser.json());  // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json
app.use(methodOverride());


// define model ==============================================



// listen (start app with node server.js) ========================

app.listen(3000);
console.log("App listening on port 3000");