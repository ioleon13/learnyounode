var net = require('net');
var port = 4001;
var conn;

var RETRY_INTERVAL = 3000;
var MAX_RETRIES = 10;

var retriedTimes = 0;

var quitting = false;

process.stdin.resume();

process.stdin.on('data', function(data) {
	if (data.toString().trim().toLowerCase() === 'quit') {
		quitting = true;
		console.log('quitting...');
		conn.end();
		process.stdin.pause();
	} else{
		conn.write(data);
	};
});

(function connect() {
	function reconnect() {
		if (retriedTimes >= MAX_RETRIES) {
			throw new Error('Max retry times has been exceeded, give up!');
		};

		retriedTimes += 1;
		setTimeout(connect, RETRY_INTERVAL);
	}

	conn = net.createConnection(port);

	conn.on('connect', function() {
		retriedTimes = 0;
		console.log('connected to the server');
	});

	conn.on('error', function(err) {
		console.log('connect error: ' + err.message + ', error code: ' +err.code);
	});

	conn.on('close', function() {
		if (!quitting) {
			console.log('connection was closed, reconnect');
			reconnect();
		};
	});

	conn.pipe(process.stdout, {end:false});
} ());