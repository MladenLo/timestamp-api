//Importing modules
var express = require('express');

//Importing routes
var indexRoute = require('./app/routes/index');

var app = express();

//Set static files path
app.use(express.static(__dirname + '/static'));

//Set view directory
app.set('view engine', 'pug');
app.set('views', './views');

//Defining routes
app.use('/', indexRoute);

app.listen(8080);