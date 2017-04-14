// Darber - index.js
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;


// Pug Tempalate Engine
require('pug');
app.set('view engine', 'pug');

// Serve Static Files
app.use(express.static(__dirname + '/public'));

// index view
app.get('/', function(req, res) {
    res.render('index');
});

// 404 for any page that doesnt exist - This goes after all other views
app.get('*', function(req, res){
    res.status(301).redirect('/');
});


//start http listening
http.listen(port, function(){
    console.log('listening on *:' + port);
});
