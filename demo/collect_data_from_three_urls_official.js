var http = require("http");
var bl = require("bl");

var results = [];
var count = 0;

var shouldPrint = function () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	};
}

var httpGet = function(index) {
	http.get(process.argv[2+index], function (res) {
		res.pipe(bl (function (err, data) {
			if (err) {
				console.error(err);
			}

			results[index] = data.toString();
			count++;

			if (count === 3) {
				shouldPrint();
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	httpGet(i);
};