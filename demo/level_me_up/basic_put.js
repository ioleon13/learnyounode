var level = require('level');
var db = level(process.argv[2]);

JSON.parse(process.argv[3], function(key, value) {
	db.put(key, value, function(err) {
		if (err) {
			return console.log('error in put():', err);
		};
	});

	db.close();
});