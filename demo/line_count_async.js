var fs = require("fs");

var lines = 0;
fs.readFile(process.argv[2], function(err, data) {
    if (err)
        throw err;
    lines = data.toString().split('\n').length - 1;
    console.log(lines);
});
