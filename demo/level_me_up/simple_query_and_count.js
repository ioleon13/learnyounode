module.exports = function(db, date, callback) {
	var count = 0;

	db.createReadStream({start: date})
	  .on('data', function(data) {
	  	count++;
	  })
	  .on('error', function(err) {
	  	if (callback) {
	  		callback(err, 0);
	  		callback = null;
	  	}
	  })
	  .on('end', function() {
	  	if (callback) {
	  		callback(null, count);
	  		callback = null;
	  	}
	  });
}