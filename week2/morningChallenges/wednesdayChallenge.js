/**
 * Sometimes we want to test more complicated data structures
 * than string or number. We may want to check if two objects
 * or two arrays have the same elements. Write a function which
 * compares two nested objects or arrays.
 */

var deepEqual = function(/* .... */) {
  // code here
};

console.log(deepEqual(
  [{a:3},{b:4}],
  [{a:'3'},{b:'4'}]
)); // -> false

console.log(deepEqual(
  {a:[2,3],b:[4]},
  {b:[4],a:[2,3]}
)); // -> true

console.log(deepEqual(
  'hello',
  'hello'
)); // -> true
