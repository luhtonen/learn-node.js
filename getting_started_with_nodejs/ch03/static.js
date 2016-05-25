/**
 * Created by luhtonen on 24/05/16.
 */

'use strict';

const fs = require('fs');

function canHandleRequest(request) {
  return request.url.startsWith('/static/')
    || request.url === '/favicon.ico';
}

exports.canHandleRequest = canHandleRequest;

function serveStaticAsset(request, response) {
  let url = request.url.substr(1);
  if (url === 'favicon.ico') {
    url = 'static/favicon.ico';
  }
  fs.readFile(url, (err, data) => {
    if (err) {
      console.log('Error: file not found:', err);
      response.statusCode = 404;
      response.end();
      return;
    }
    response.end(data);
    console.log('end of callback');
  });
  console.log('end of serveStaticAsset');
}

exports.serveStaticAsset = serveStaticAsset;