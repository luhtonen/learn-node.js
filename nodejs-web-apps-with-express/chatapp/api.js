/**
 * Created by luhtonen on 27/05/16.
 */

'use strict';

const express = require('express');
const _ = require('lodash');
const uuid = require('node-uuid');
let rooms = require('./data/rooms.json');
let messages = require('./data/messages.json');
const users = require('./data/users.json');

const router = express.Router();
module.exports = router;

router.get('/rooms', (req, res) => {
  res.json(rooms);
});

router.route('/rooms/:roomId/messages')
  .get((req, res) => {
    const roomId = req.params.roomId;
    const roomMessages = messages
      .filter(m => m.roomId === roomId)
      .map(m => {
        const user = _.find(users, u => u.id === m.userId);
        return { text: `${user.name}: ${m.text}`}
      });

    const room = _.find(rooms, r => r.id === roomId);
    if (!room) {
      res.sendStatus(404);
      return;
    }

    res.json({
      room: room,
      messages: roomMessages
    });
  })
  .post((req, res) => {
    const roomId = req.params.roomId;
    const message = {
      roomId: roomId,
      text: req.body.text,
      userId: req.user.id,
      id: uuid.v4()
    };
    messages.push(message);

    res.sendStatus(200);
  })
  .delete((req, res) => {
    const roomId = req.params.roomId;

    messages = messages.filter(m => m.roomId !== roomId);

    res.sendStatus(200);
  });