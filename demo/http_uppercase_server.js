var http = require("http");
var map = require("through2-map");

http.createServer(function (req, res) {
	var requestMethod = req.method;

	if (requestMethod === "POST") {
		req.pipe(map (function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	} else {
		return res.end("it was not a POST\n");
	}
}).listen(process.argv[2]);