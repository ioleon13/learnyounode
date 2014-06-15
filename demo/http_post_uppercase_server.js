var http = require("http");
var through = require("through");

var server = http.createServer(function (req, res) {
	if (req.method === "POST") {
		req.pipe(through (function (body) {
			this.queue(body.toString().toUpperCase());
		})).pipe(res);
	} else {
		res.end("send me a POST request");
	}
});

server.listen(process.argv[2]);