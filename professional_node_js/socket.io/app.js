var httpd = require('http').createServer(handler);
var io = require('socket.io').listen(httpd);
var fs = require('fs');

httpd.listen(4000);

function handler(req, res) {
	fs.readFile(__dirname + '/index.html', function(err, data) {
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	});
}

io.sockets.on('connection', function(socket) {
	socket.on('clientMessage', function(content) {
		socket.emit('serverMessage', 'You said: ' + content);
		var username = socket.id;
		if (socket.username) {
			username = socket.username;
		}

		socket.broadcast.emit('serverMessage', username + ' said: ' + content);
	});

	socket.on('login', function(username) {
		if (username) {
			socket.username = '[' + username + ']';
			socket.emit('serverMessage', 'Currently logged in as ' + socket.username);
			socket.broadcast.emit('serverMessage', 'User ' + socket.username + ' logged in');
		}
	});

	socket.emit('login');
});