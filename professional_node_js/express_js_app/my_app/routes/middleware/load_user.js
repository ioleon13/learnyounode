var users = require('../../data/users');

function loadUser(req, res, next) {
  var user = req.user = users[req.params.name];

  if (!user) {
    res.send('The user was not found', 404);
  } else{
    next();
  }
}

module.exports = loadUser;