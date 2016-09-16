/**
 * Created by luhtonen on 25/05/16.
 */

'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
require('./passport-init');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(require('./logging'));

app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'));

//require('express-debug')(app, {});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('express-session')({
  secret: 'keyboard cat', resave: false, saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const authRouter = require('./auth');
app.use(authRouter);

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    return next();
  }
  res.redirect('/login');
});

app.get('/', (req, res) => {
  // throw new Error('Oh no');
  res.render('home', {title: 'Home'});
});

const adminRouter = require('./admin');
app.use('/admin', adminRouter);

const apiRouter = require('./api');
app.use('/api', apiRouter);

// app.use((error, req, res, next) => {
//   res.send('Super secret error handler');
// });

app.listen(3000, () => {
  console.log('Chat app listening on port 3000');
});