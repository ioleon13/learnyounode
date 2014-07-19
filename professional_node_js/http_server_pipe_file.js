var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'video/mp4'});
	var rs = fs.createReadStream('test.mp4');
	rs.pipe(res);
}).listen(8088);