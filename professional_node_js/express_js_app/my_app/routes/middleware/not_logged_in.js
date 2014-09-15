function notLoggedIn(req, res, next) {
  if (req.session.user) {
    console.log('user:', req.session.user.username, 'has logged in');
    res.send('Unauthorized, this access only for users who are not logged in.', 401);
  } else{
    next();
  }
}

module.exports = notLoggedIn;