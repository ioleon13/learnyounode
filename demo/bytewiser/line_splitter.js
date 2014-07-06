var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
	if (err) throw err;
	var startPos = 0;
	for (var i = 0; i < data.length; i++) {
		if (data[i] === 0x0a) {
			console.log(data.slice(startPos, i));
			startPos = i + 1;
		}
	};

	console.log(data.slice(startPos, data.length));
});