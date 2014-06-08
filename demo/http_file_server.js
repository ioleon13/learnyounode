var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	var src = fs.createReadStream(process.argv[3]);
	src.pipe(res);
}).listen(process.argv[2]);