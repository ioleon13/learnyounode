var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2]);