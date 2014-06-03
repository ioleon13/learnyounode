var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);

var line_count = buf.toString().split('\n').length - 1;

console.log(line_count);
