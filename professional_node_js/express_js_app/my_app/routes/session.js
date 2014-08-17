var users = require('../data/users');

module.exports = function(app) {

  app.get('/session/new', function(req, res) {
    res.render('session/new', {title: 'Log in'});
  });

  app.post('/session', function(req, res) {
    if (req.body._method === 'DELETE') {
      console.log('Logout to destroy session');
      req.session.destroy();
      console.log('redirect to /users');
      res.redirect('/users');
    } else{
      if (users[req.body.username] &&
        users[req.body.username].password === req.body.password) {
          console.log('Logged! set session name to: ',
            users[req.body.username].name);
          req.session.name = users[req.body.username].name;
          res.redirect('/users');
      } else{
          res.redirect('/session/new');
      }
    }
  });
};