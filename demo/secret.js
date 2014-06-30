var crypto = require("crypto");
var zlib = require("zlib");
var tar = require("tar");
var through = require("through");

var parser = tar.Parse();
parser.on('entry', function(e) {
	if (e.type !== 'File') {
		return;
	}

	var hashStream = crypto.createHash('md5', {encoding: 'hex'});
	e.pipe(hashStream)
	.pipe(through(null, end))
	.pipe(process.stdout);

	function end() {
		this.queue(' ' + e.path + '\n');
	}
});

var decrypto = crypto.createDecipher(process.argv[2], process.argv[3]);



process.stdin
	.pipe(decrypto)
	.pipe(zlib.createGunzip())
	.pipe(parser);