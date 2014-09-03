function restrictUserToSelf(req, res, next) {
  console.log('request sesssion name:', req.session.name);
  console.log('request delete name:', req.user.name);
  if (!req.session.name || 
    req.session.name != req.user.name) {
    res.send('Unauthorized, you cannot delete any profile other than your own!', 401);
  } else{
    next();
  }
}

module.exports = restrictUserToSelf;