var connect = require('connect');
var morgan = require('morgan');


var app = connect()
	.use(morgan('tiny'))
	.use(function(req, res) {
		res.end('Hello World!\n');
	})
	.listen(3000);


