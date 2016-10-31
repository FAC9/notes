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

// ---------------------------------------------------------------------------
// Solution from board

var $ = function (selector) {
 var element = document.querySelector(selector);
 var obj = {};

  obj.addClass = function (newClass) {
    element.classList.add(newClass);
    console.log( "addClass");
    return obj;

  };

  obj.text = function (text) {
    element.innerHTML = text;
    console.log( "text");
    return obj;
  };

  return obj;
};
