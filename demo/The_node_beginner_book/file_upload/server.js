var http = require("http");
var url = require("url");

function start(route, handle) {
	http.createServer(function(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(chunk) {
			postData += chunk;
			console.log("Received POST data chunk '" + chunk + "'.");
		});

		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});

		/*response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Hello World");
		response.end();*/
	}).listen(8800);

	console.log("Server has started.");
}

exports.start = start;