var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
	
	var pathname = url.parse(req.url, true, true).pathname;
	var isoString = url.parse(req.url, true).query.iso;
	var date = new Date(isoString);
	var result;

	if (pathname === "/api/parsetime") {
		result = {"hour": date.getHours(),
						"minute": date.getMinutes(),
						"second": date.getSeconds()};
	} else if (pathname === "/api/unixtime") {
		result = {"unixtime": date.getTime()};
	}

	if (result) {
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
}).listen(process.argv[2]);