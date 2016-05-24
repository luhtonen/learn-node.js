/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

let userCounter = 0;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  userCounter++;
  res.end('Hello World, you are user: \n' + userCounter);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});