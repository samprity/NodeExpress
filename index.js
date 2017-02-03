var express = require('express');
var app = express();

var customers = [
	{firstName:'Peter', lastName: 'Pan', age:13},
	{firstName:'Captain', lastName:'Hook', age:35}
];

app.get('/customers/', function(req, res) {
	res.type('text/plain');
	res.json(customers);
});

app.use('/', express.static(__dirname + '/public/'));
//http://127.0.0.1:8080/
app.listen(8080);