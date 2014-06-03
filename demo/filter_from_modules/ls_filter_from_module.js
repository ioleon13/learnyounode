var filter = require("./filter.js");

filter(process.argv[2], process.argv[3], function (err, files) {
    if (err) throw err;

    for (var i = 0; i < files.length; i++)
        console.log(files[i]);
});
