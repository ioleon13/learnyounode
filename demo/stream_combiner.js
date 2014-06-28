var combine = require("stream-combiner");
var split = require("split");
var through = require("through");
var zlib = require("zlib");

var convert;

var throughStr = through(function (line) {
	if (line.length === 0) return;

	var jsonStr = JSON.parse(line);

	if (jsonStr.type === "genre") {
		if (convert) {
			this.queue(JSON.stringify(convert) + "\n");
		}
		convert = {"name":jsonStr.name,"books":[]};
	} else if (jsonStr.type === "book") {
	    convert.books.push(jsonStr.name);
    }
}, function () {
	if (convert) {
		this.queue(JSON.stringify(convert) + "\n");
	}
	
	this.queue(null);
});

module.exports = function() {
	return combine(split(), throughStr, zlib.createGzip());
}