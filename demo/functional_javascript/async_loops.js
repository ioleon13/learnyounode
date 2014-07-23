function loadUsers(userIds, load, done) {
	var users = [];
	var count = 0;

	userIds.forEach(function(id, index) {
		load(id, function(user) {
			users[index] = user;
			if(++count === userIds.length) {
				return done(users);
			}
		});
	});
	/*for (var i = 0; i < userIds.length; i++) {
		users.push(load(userIds[i]))
	}
	return users*/
}

module.exports = loadUsers