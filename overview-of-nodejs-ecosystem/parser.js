/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

function htmlQuotes(quotes) {
  return quotes.split(/\n/)
    .map(function (line) {
      const columns = line.split(/,/);
      const company = columns[0].replace(/\"/g, '');
      const price = columns[2];
      return `${company}: ${price}</br>`;
    });
}

module.exports = htmlQuotes;