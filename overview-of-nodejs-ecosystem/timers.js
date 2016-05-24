/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

console.log('start of program');

setTimeout(() => {
  console.log("5 seconds later");
}, 5*1000);

setInterval(() => {
  console.log("1 seconds later");
}, 1000);

console.log('end of program');