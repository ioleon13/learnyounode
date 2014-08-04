function writeHeader(name, value) {
	return function(req, res, next) {
		res.setHeader(name, value);
		console.log(name, value);
		next();
	}
}

module.exports = writeHeader;