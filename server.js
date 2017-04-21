var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hellooooo');
});

app.listen(8080, function(){
    console.log('Server is listening on port 8080.');
});