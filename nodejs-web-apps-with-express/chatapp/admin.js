/**
 * Created by luhtonen on 26/05/16.
 */

'use strict';

const uuid = require('node-uuid');
const _ = require('lodash');
const express = require('express');
let rooms = require('./data/rooms.json');

const router = express.Router();
module.exports = router;

router.use((req, res, next) => {
  if (req.user.admin) {
    return next();
  }
  res.redirect('/login');
});

router.get('/rooms', (req, res) => {
  res.render('rooms', {
    title: 'Admin Rooms',
    rooms: rooms
  });
});

router.route('/rooms/add')
  .get((req, res) => {
    res.render('add');
  })
  .post((req, res) => {
    const room = {
      name: req.body.name,
      id: uuid.v4()
    };
    rooms.push(room);
    res.redirect(req.baseUrl + '/rooms');
  });

router.route('/rooms/edit/:id')
  .all((req, res, next) => {
    const roomId = req.params.id;
    const room = _.find(rooms, r => r.id === roomId);
    if (!room) {
      res.sendStatus(404);
      return;
    }
    res.locals.room = room;
    next();
  })
  .get((req, res) => {
    res.render('edit');
  })
  .post((req, res) => {
    res.locals.room.name = req.body.name;
    res.redirect(req.baseUrl + '/rooms');
  });

router.get('/rooms/delete/:id', (req, res) => {
  const roomId = req.params.id;
  rooms = rooms.filter(r => r.id !== roomId);
  res.redirect(req.baseUrl + '/rooms');
});
