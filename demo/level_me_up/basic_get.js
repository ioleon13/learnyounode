var level = require('level');
var db = level(process.argv[2]);
/*var key = '';

for (var i = 0; i < 101; i++) {
	key = 'key' + i;
	(function(key) {
		db.get(key, function(err, value) {
			if (err) {
				if(!err.notFound) {
					throw err;
				}
			} else{
				console.log(key + '=' + value);
			}
		});
	}) (key);
	
};*/

/**
* official solution
*/
function fetchNext(i) {
	var key = 'key' + i;
	db.get(key, function(err, value) {
		if (err) {
			if(!err.notFound) {
				throw err;
			}
		} else{
			console.log(key + '=' + value);
		}
	});

	if (i < 100) {
		fetchNext(i+1);
	};
}

fetchNext(0);
