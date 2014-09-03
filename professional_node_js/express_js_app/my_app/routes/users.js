var express = require('express');
var router = express.Router();
var users = require('../data/users');
var notLoggedIn = require('./middleware/not_logged_in');
var loadUser = require('./middleware/load_user');
var restrictUserToSelf = require('./middleware/restrict_user_to_self');

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  res.render('users/index', {title: 'Users', users: users});
});

router.get('/new', notLoggedIn, function(req, res) {
  res.render('users/new', {title: 'New User'});
});

router.get('/:name', loadUser, function(req, res, next) {
  /*var user = users[req.params.name];
  if (user) {
    res.render('users/profile', {title: 'User profile', user: user});
  } else{
    next();
  }*/
  res.render('users/profile', {title: 'User profile', user: req.user});
});

router.post('/', notLoggedIn, function(req, res) {
  if (users[req.body.username]) {
    res.send('Conflict', 409);
  } else{
    users[req.body.username] = req.body;
    res.redirect('/users');
  }
});

router.post('/:name', loadUser, restrictUserToSelf, function(req, res, next) {
  if (req.body._method === 'DELETE') {
    console.log('delete a user!!!');
    /*if (users[req.params.name]) {
      delete users[req.params.name];
      res.redirect('/users');
    } else{
      next();
    }*/
    delete users[req.user.username];
    res.redirect('/users');
  }
});

module.exports = router;
