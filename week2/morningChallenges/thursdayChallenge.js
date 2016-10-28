/**
 * Let's build jQuery. The function should follow the
 * below interface.
 */

var $ = /* something ... */

var myTitle = $('h1')

myTitle.addClass('welcome').text('Hello, World!');

setTimeout(function() {
  myTitle.hide();
},1000);

setTimeout(function() {
  myTitle.show();
},1000);
