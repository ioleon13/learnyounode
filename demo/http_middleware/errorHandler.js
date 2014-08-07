var connect = require('connect');
var errorHandler = require('errorhandler');

errorHandler.title = 'Error Handler App'

var app = connect()
	.use(function(req, res, next) {
		next(new Error('Opps!'))
	})
	.use(function(req, res) {
		res.end('Hello World!\n');
	})
	.use(errorHandler())
	.listen(3000);