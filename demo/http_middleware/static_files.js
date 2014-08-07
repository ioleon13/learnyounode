var connect = require('connect');
var static = require('serve-static');

var app = connect()
	.use(static(__dirname + '/public'))
	.use(function(req, res) {
		res.end('Hello World!');
	})
	.listen(3000);