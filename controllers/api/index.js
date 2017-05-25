var express = require('express');
var router = express.Router();
var request = require('request');
var awsEndpoints = require('../../creds.json');

router.post('/wordfrequency', function(req, res) {
    var formData = {
        "url": req.body.url
    };
    request.post({url:awsEndpoints.wordFrequency, form: JSON.stringify(formData)}, function (err, httpResponse, body) {
        if (!err) {
            res.json({error:false, data:JSON.parse(body)});
        } else {
            res.json({error:true, msg:err, data:null});
        }
    });
});

router.post('/add', function(req, res) {
    
    if ( (!isNaN(req.body.num1)) && (!isNaN(req.body.num2)) ) {
        //if both params are numbers => num1 + num2
        res.json({msg: "The answer is: " + (Number(req.body.num1) + Number(req.body.num2))});
    } else {
        res.json({msg:"Looks like you included a non-number... try again."});
    }
    
});

module.exports = router;