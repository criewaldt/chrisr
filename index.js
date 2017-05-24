// Darber - index.js
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');


// Pug Tempalate Engine
require('pug');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve Static Files
app.use(express.static(__dirname + '/public'));


// index view
app.get('/', function(req, res) {
    res.render('index');
});

app.post('/api/add', function(req, res) {
    
    if ( (!isNaN(req.body.num1)) && (!isNaN(req.body.num2)) ) {
        //if both params are numbers => num1 + num2
        res.json({msg: "The answer is: " + Number(req.body.num1) + Number(req.body.num2)});
    } else {
        res.json({msg:"Looks like you included a non-number... try again."});
    }
    
});

// 404 for any page that doesnt exist - This goes after all other views
app.get('*', function(req, res){
    res.status(301).redirect('/');
});


//start http listening
http.listen(port, function(){
    console.log('listening on *:' + port);
});
