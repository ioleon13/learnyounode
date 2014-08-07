var connect = require('connect');
var qs = require('qs');
var parse = require('url').parse;

var app = connect()
	.use(function(req, res, next) {
		if (req.url.indexOf('?') >= 0) {
			req.query = qs.parse(parse(req.url).query);
		} else {
			req.query = {};
		}

		/*console.log(req.url);
		console.log(req.url.indexOf('?'));
		req.query = ~req.url.indexOf('?')
			? qs.parse(parse(req.url).query)
			: {};
			*/
			//req.query = qs.parse(parse(req.url).query);
		next();
	})
	.use(function(req, res) {
		res.end(JSON.stringify(req.query));
	})
	.listen(3000);