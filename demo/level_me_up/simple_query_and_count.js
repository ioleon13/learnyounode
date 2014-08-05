module.exports = function(db, date, callback) {
	var count = 0;

	db.createReadStream({start: date})
	  .on('data', function(data) {
	  	count++;
	  })
	  .on('error', function(err) {
	  	callback(err, 0);
	  })
	  .on('end', function() {
	  	callback(null, count);
	  });
}