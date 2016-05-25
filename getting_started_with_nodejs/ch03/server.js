/**
 * Created by luhtonen on 24/05/16.
 */

'use strict';

const http = require('http');
//const serveStaticAsset = require('./static').serveStaticAsset;
//const canHandleRequest = require('./static').canHandleRequest;
const asset = require('./static');

http.createServer((req, res) => {
  debugger;
  console.log(`Incoming request: ${req.url}`);

  if (asset.canHandleRequest(req)) {
    asset.serveStaticAsset(req, res);
    return;
  }

  res.end('Hello World!');
}).listen(3000, "127.0.0.1", () => {
  console.log(`Server is listening on localhost port 3000`);
});