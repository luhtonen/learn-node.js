/**
 * Created by luhtonen on 28/05/16.
 */

'use strict';

const fs = require('fs');
const accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

module.exports = require('morgan')('combined', {stream: accessLogStream});
