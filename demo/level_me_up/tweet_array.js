module.exports = function(db, date, callback) {
	var tweets = [];
	var dateEnd = date + '\xff';

	db.createReadStream({start: date, end: dateEnd})
	  .on('data', function(data) {
	  	tweets.push(data.value);
	  })
	  .on('error', function(err) {
	  	if (callback) {
	  		callback(err);
	  		callback = null;
	  	}
	  })
	  .on('end', function() {
	  	if (callback) {
	  		callback(null, tweets);
	  		callback = null;
	  	}
	  });
}