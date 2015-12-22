
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
var todos = ["travailler","consoler","envoyer",];

app.get('/todos', function (req, res){
	res.json(todos);
});
app.post('/todos', function (req, res) {
  res.json(todos);
});