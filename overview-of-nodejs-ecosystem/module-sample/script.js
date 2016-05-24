/**
 * Created by luhtonen on 23/05/16.
 */

'use strict';

$(function () {
  $.get("quotes.csv", function (data) {
    const html = htmlQuotes(data);
    $("#result").html(html);
  });
});
