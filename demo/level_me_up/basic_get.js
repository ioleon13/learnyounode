var level = require('level');
var db = level(process.argv[2]);
var key = '';

for (var i = 0; i < 101; i++) {
	(function(e) {
                key = 'key' + e;
		db.get(key, function(err, value) {
			console.log(key + '=' + value);
		});
	}) (i);
	
};
