var connect = require('connect');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = connect()
	.use(morgan(':method :req[content-type]'))
	.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(function(req, res) {
		res.end(JSON.stringify(req.body));
	})
	.listen(8080);