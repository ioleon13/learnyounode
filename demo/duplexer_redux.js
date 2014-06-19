var duplexer = require("duplexer");
var through = require("through");

module.exports = function(counter) {
	var dic = {};
	var tr = through(function(buf) {
		dic[buf.country] = (dic[buf.country] || 0) + 1;
	},
	function() {
		counter.setCounts(dic);
	});
	return duplexer(tr, counter);
}