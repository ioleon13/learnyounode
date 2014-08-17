var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(require('stylus').middleware(process.argv[3]||__dirname + '/public'));
app.use(serveStatic(process.argv[3]||__dirname + '/public'));

app.listen(process.argv[2]);