var http = require("http");

var result1 = "";
var result2 = "";
var result3 = "";
var end_callback_count = 0;
http.get(process.argv[2], function (res1) {
    res1.setEncoding("utf-8");

    res1.on("data", function (data) {
		result1 = result1 + data;
    });
  
    res1.on("end", function (end) {
		end_callback_count++;
		should_print(end_callback_count);
    });
});


http.get(process.argv[3], function (res2) {
    res2.setEncoding("utf-8");

    res2.on("data", function (data) {
		result2 = result2 + data;
    });
  
    res2.on("end", function (end) {
		end_callback_count++;
		should_print(end_callback_count);
    });
});


http.get(process.argv[4], function (res3) {
    res3.setEncoding("utf-8");

    res3.on("data", function (data) {
		result3 = result3 + data;
    });
  
    res3.on("end", function (end) {
		end_callback_count++;
		should_print(end_callback_count);	
    });
});

var should_print = function(count) {
	if (count == 3) {
		console.log(result1);
		console.log(result2);
		console.log(result3);
	};
}
