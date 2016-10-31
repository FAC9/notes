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

// ---------------------------------------------------------------------------
// Solution from board

var deepEqual = function(x, y) {
  if(typeof x !== 'object' && typeof y !== 'object') {
  	return x === y;
  } else if (Object.keys(x).length !== Object.keys(y).length) {
  	return false;
  } else {
	return Object.keys(x).every(function(key){
		return deepEqual(x[key], y[key]);
	});
  }
}

console.log(deepEqual(
  {},
  []
)); // -> false

console.log(deepEqual(
  [{a:3},{b:4}],
  [{a:'3'},{b:'4'}]
)); // -> false

console.log(deepEqual(
  [{a:3},{b:4},{c:5}],
  [{a:3},{b:4}]
)); // -> false

console.log(deepEqual(
  {a:[2,3],b:[4]},
  {b:[4],a:[2,3],c:['giraffes','elephants',{b:7}]}
)); // -> true

console.log(deepEqual(
  'hello',
  'hello'
)); // -> true
