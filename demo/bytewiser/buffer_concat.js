var list = [];

process.stdin.on('data', function(buf) {
  list.push(buf);
});

process.stdin.on('end', function() {
  console.log(Buffer.concat(list));
});