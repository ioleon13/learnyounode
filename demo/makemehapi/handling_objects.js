var hapi = require('hapi');

var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: 'index.html'
  }
});

server.start();