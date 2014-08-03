var level = require('level');
var fs = require('fs');

var db = level(process.argv[2]);

var ops = [];

fs.readFile(process.argv[3], function(err, data) {
	if (err) {
		throw err;
	}

	var lines = data.toString().split('\n');
	console.log(lines);
	lines.forEach(function(line) {
		var arr = line.split(',');
		if (arr.length >= 2) {
			var batchObj = new Object();
			if (arr[0] === 'put' && arr.length === 3) {
				batchObj.type = arr[0];
				batchObj.key = arr[1];
				batchObj.value = arr[2];
			} else if (arr[0] === 'del' && arr.length === 2) {
				batchObj.type = arr[0];
				batchObj.key = arr[1];
			}

			ops.push(batchObj);
		};
	});

	db.batch(ops, function(err) {
		if (err) {
			throw err;
		}

		db.close();
	});
});