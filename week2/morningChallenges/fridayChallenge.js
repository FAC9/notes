var test=function(){"use strict";function b(b,c){var d={equal:function(a,b,c){a===b?console.log("PASS: "+c):console.error("ERROR: "+c)},ok:function(a,b){a?console.log("PASS: "+b):console.error("ERROR: "+b)},end:function(){var b=a.shift();delete this.equal,delete this.end,"function"==typeof b&&b()}};a.push(c.bind(null,d))}var a=[];return b.init=function(){var b=a.shift();"function"==typeof b&&b()},b}();

var jQuery = function(document) {
  return function(selector) {
    var element = document.querySelector(selector);
    var obj = {};

    obj.addClass = function (newClass) {
      element.classList.add(newClass);
      return obj;
    };

    obj.text = function (text) {
      element.innerHTML = text;
      return obj;
    };

    return obj;
  };
};

test('Test jQuery adds a class', function(t) {
  var $ = jQuery(/* ???? */);
  // some tests
});
