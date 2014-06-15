var through = require("through");
var split = require("split");

var line_count = 1;
process.stdin
	.pipe(split())
	.pipe(through(function (line) {
		if (line_count % 2 == 0) {
			this.queue(line.toString().toUpperCase() + "\n");
		} else {
			this.queue(line.toString().toLowerCase() + "\n");
		}
		line_count++;
	}))
	.pipe(process.stdout);
