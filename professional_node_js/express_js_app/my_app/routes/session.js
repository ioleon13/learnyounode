var users = require('../data/users');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
  });

  app.get('/session/new', function(req, res) {
    res.render('session/new', {title: 'Log in'});
  });

  app.post('/session', function(req, res) {
    if (req.body._method === 'DELETE') {
      req.session.destroy();
      res.redirect('/users');
    } else{
      if (users[req.body.username] &&
        user[req.body.username].password === req.body.password) {
          req.session.user = users[req.body.username];
          res.redirect('/users');
      } else{
          res.redirect('/session/new');
      }
    }
  });
};