var connect = require('connect');

var errorCreator = require('./error_create.js');
var saveRequest = require('./save_request.js');
var writeHeader = require('./write_header.js');
var replyText = require('./reply_text.js');
var errorHandler = require('./error_handler.js');

var app = connect()
	.use(errorCreator())
	.use(saveRequest(__dirname + '/requests'))
	.use(writeHeader('X-Powered-By', 'Node'))
	.use(replyText('Hello World!'))
	.use(errorHandler());

app.listen(8800);