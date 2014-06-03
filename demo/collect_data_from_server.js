var http = require("http");

http.get(process.argv[2], function (res) {
    res.setEncoding("utf-8");

    var result = "";
    res.on("data", function (data) {
	result = result + data;
    });
  
    res.on("end", function (end) {
        console.log(result.length);
	console.log(result);
    });
});
