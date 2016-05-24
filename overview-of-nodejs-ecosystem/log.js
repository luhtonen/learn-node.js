/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

const fs = require('fs');

fs.readFile('log.js', 'utf8', (err, data) => {
  console.log(data);
});

console.log('Hello, World!');

const data = fs.readFileSync('log.js', 'utf8');
console.log(data);
console.log('4 + 5 =', 4+5);
