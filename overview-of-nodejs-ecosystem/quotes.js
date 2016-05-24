/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

const fs = require('fs');
const htmlQuotes = require('./parser');

fs.readFile('quotes.csv', 'utf8', (err, data) => {
  const html = htmlQuotes(data);
  console.log(html);
});
