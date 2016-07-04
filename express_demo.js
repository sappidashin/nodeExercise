var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log('visit via Get');
	res.send('Hello GET');
})

app.post('/', function(req, res){
	console.log('visit via Post');
	res.send('Hello POST');
})

app.delete('/del_user', function(req, res){
	console.log('/del_user delete request');
	res.send('delete page');
})

app.get('/list_user', function(req, res){
	console.log('/list_user GET request');
	res.send('display user list');
})

var server = app.listen(8081, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('EX: visting url is http://%s:%s', host, port);

})