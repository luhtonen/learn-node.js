/**
 * Created by luhtonen on 24/05/16.
 */

'use strict';

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  debugger;
  console.log(`Incoming request: ${req.url}`);

  if (req.url.startsWith('/static/')) {
    fs.readFile(req.url.substr(1), (err, data) => {
      if (err) {
        console.log('Error: file not found:', err);
        res.statusCode = 404;
        res.end();
        return;
      }
      res.end(data);
    });
    return;
  }

  res.end('Hello World!');
}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on localhost port 3000`);
});