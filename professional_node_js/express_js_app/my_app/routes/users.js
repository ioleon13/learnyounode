var express = require('express');
var router = express.Router();
var users = require('../data/users')

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  res.render('users/index', {title: 'Users', users: users});
});

router.get('/new', function(req, res) {
  res.render('users/new', {title: 'New User'});
});

router.get('/:name', function(req, res, next) {
  var user = users[req.params.name];
  if (user) {
    res.render('users/profile', {title: 'User profile', user: user});
  } else{
    next();
  }
});

router.post('/:name', function(req, res, next) {
  if (req.body._method === 'DELETE') {
    console.log('delete a user!!!');
    if (users[req.params.name]) {
      delete users[req.params.name];
      res.redirect('/users');
    } else{
      next();
    }
  }
});

module.exports = router;
