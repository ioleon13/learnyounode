var spawn = require("child_process").spawn;

var child = spawn('tail', ['-f', '/var/log/system.log']);

child.stdout.on('data', function(data) {
	console.log('tail output: \n'+ data);
});

child.stderr.on('data', function(data) {
	console.log('tail error output: \n', data);
});