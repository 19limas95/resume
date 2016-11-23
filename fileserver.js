var express = require("express");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resume',['resume']);
var bodyParser = require("body-parser");


//new york
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.json());
app.get('/resume',function(req,res){ 
	console.log("I received a GET Request");
	db.resume.find(function(err,docs){
		console.log(docs)
		res.json(docs);
	});
});

app.post('/resume',function(req,res){
	console.log(req.body);
	db.resume.insert(req.body,function(err,docs){
		res.json(docs);
	});
});


app.listen(8080);
console.log("Server running port 8080")