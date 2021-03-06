var hapi = require('hapi');

var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

var getName = function(request, reply) {
  reply('Hello ' + request.params.name);
};

server.route({
  path: '/{name}',
  method: 'GET',
  handler: getName
});

server.start();
