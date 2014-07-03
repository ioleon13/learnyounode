//var buf = new Buffer(process.argv);
//console.log(buf.toString("hex"/*, 0, buf.length*/));

//process.argv was a bufferarray, first two arguments should be skipped
var bytes = process.argv.slice(2).map(function(arg) {
	return parseInt(arg)
});

console.log(new Buffer(bytes).toString('hex'));