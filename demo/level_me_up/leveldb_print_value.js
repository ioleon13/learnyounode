var level = require('level');
var db = level(process.argv[2]);
db.get('levelmeup', function(err, value) {
	if (err) {
		return console.log('Error:', err);
	};

	console.log(value);
});