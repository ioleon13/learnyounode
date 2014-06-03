var fs = require("fs");
var path = require("path");

module.exports = function (dir, ext, callback_) {
    fs.readdir(dir, function(err, files) {
        if (err) return callback_(err);

	files = files.filter(function (file) {
	    return path.extname(file) === "." + ext
	});

	callback_(null, files);
    });
};
