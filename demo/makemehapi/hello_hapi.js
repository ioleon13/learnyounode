var hapi = require('hapi');

var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

var replyStr = function(request, reply) {
  reply('Hello Hapi');
};

server.route({
  path: '/',
  method: 'GET',
  handler: replyStr
});

server.start();