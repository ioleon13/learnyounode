var multilevel = require('multilevel');
var net = require('net');
var level = require('level');

var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.createReadStream()
  .on('data', function(data) {
  	if (data.key === 'multilevelmeup') {
  		console.log(data.value);
  	}
  })
  .on('error', function(err) {
  	throw err;
  })
  .on('end', function() {
  	connection.end();
  })

/*
db.get('multilevelmeup', function(err, value) {
	if (err) {
		throw err;
	} else {
		console.log(value);
		connection.end();
	}
});
*/