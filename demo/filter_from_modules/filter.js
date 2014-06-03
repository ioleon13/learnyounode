var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) return callback(err);

	var arrayData = new Array();
	for (var i = 0; i < files.length; i++) {
	    if (path.extname(files[i]).substr(1) == ext) {
	        arrayData.push(files[i]);
	    }
	}
	return callback(err, arrayData);
    });
};
