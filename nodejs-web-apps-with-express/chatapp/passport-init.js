/**
 * Created by luhtonen on 28/05/16.
 */

'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./data/users.json');
const _ = require('lodash');

passport.use(new LocalStrategy((username, password, done) => {
  const user = _.find(users, u => u.name === username);

  if (!user || user.password !== password) {
    return done(null, false);
  }

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = _.find(users, u => u.id === id);
  return done(null, user);
});