process.stdin.on("data", function(buf) {
	var array = new Uint8Array(buf.length);
	for (var i = 0; i < buf.length; i++) {
		array[i] = buf[i];
	};

	console.log(JSON.stringify(array));
})