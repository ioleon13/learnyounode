var net = require("net");

var formateZeroFilled = function (value) {
	if (value < 10) {
		return "0" + value;
	} else {
		return value;
	}
}

var server = net.createServer(function (socket) {
	var date = new Date();

	var data_to_write = 
		date.getFullYear() + "-" +
		formateZeroFilled(date.getMonth()+1) + "-" +
		formateZeroFilled(date.getDate()) + " " +
		formateZeroFilled(date.getHours()) + ":" +
		formateZeroFilled(date.getMinutes());

	socket.end(data_to_write + "\n");
});

server.listen(process.argv[2]);