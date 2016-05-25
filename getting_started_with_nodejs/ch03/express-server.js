/**
 * Created by luhtonen on 24/05/16.
 */

'use strict';

const express = require('express');
const favicon = require('express-favicon');

const app = express();

app.use('/static', express.static('static'));
app.use(favicon(__dirname + '/static/favicon.ico'));

app.get('/', (request, response) => {
  response.end('Hello World from express');
});

app.get('/edu', (request, response) => {
  response.end('Hello Edu from express');
});

app.listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on localhost port 3000`);
});