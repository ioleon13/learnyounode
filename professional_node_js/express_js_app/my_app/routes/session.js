var users = require('../data/users');

module.exports = function(app) {

  app.get('/session/new', function(req, res) {
    res.render('session/new', {title: 'Log in'});
  });

  app.post('/session', function(req, res) {
    if (req.body._method === 'DELETE') {
      req.session.destroy();
      res.redirect('/users');
    } else{
      if (users[req.body.username] &&
        users[req.body.username].password === req.body.password) {
          req.session.name = users[req.body.username].name;
          res.redirect('/users');
      } else{
          res.redirect('/session/new');
      }
    }
  });
};