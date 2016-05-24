/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

const csvrow = require('csvrow');

function htmlQuotes(quotes) {
  return quotes.split(/\n/)
    .map(function (line) {
      const columns = csvrow.parse(line);
      const company = columns[0];
      const price = columns[2];
      return `${company}: ${price}</br>`;
    }).join('\n');
}

module.exports = htmlQuotes;