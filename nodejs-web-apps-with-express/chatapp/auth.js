/**
 * Created by luhtonen on 28/05/16.
 */

'use strict';

const express = require('express');
const passport = require('passport');
const _ = require('lodash');
const users = require('./data/users.json');

const router = express.Router();
module.exports = router;

router.get('/login', (req, res) => {
  if (req.app.get('env') === 'development') {
    let user = users[0];
    if (req.query.user) {
      user = _.find(users, u => u.name === req.query.user);
    }
    return req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/');
    });
  }
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});