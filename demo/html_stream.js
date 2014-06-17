var trumpet = require("trumpet");
var through = require("through");

var tr = trumpet();

var throughStr = through(function(buf) {
	this.queue(buf.toString().toUpperCase());
}); 

//the loudStr can read and write
var loudStr = tr.select(".loud").createStream();
loudStr.pipe(throughStr).pipe(loudStr);

process.stdin.pipe(tr).pipe(process.stdout);