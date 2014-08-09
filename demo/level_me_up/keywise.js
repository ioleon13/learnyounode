var level = require('level');
var db = level(process.argv[2], {valueEncoding: 'json'});
var jsonObj = require(process.argv[3]);

var ops = jsonObj.map(function(row) {
	var key;
	if (row.type === 'user') {
		key = row.name;
	} else if (row.type === 'repo') {
		key = row.user + '!' + row.name;
	}

	return {type: 'put', key: key, value: row};
});

db.batch(ops, function(err) {
	if (err) {
		throw err;
	}

	db.close();
});
