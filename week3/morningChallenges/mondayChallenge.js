/**
 *  Create a function called 'passOutputsAsInputs'
 *  which takes as arguments other functions and returns
 *  another function. The new function behaves as a
 *  chain of all the functions put together, in reverse order.
 */
var passOutputsAsInputs = function(/* */) {
  // code here
};

function add_one (n) {
  const total = n + 1;
  return total;
}

function less_one (n) {
  const total = n - 1;
  return total;
}

function multiply_two (n) {
  const total = n * 2;
  return total;
}

function start (n) {
  return parseInt(n);
}

const parseAddMultiplySubtract = passOutputsAsInputs(
  less_one,
  multiply_two,
  add_one,
  start
);

parseAddMultiplySubtract('1'); // 3

// ---------------------------------------------------------------------------
// Nori's Solution

var passOutputsAsInputs = function() {
  var funcs = Array.from(arguments).reverse();
  return function(n){
      return funcs.reduce(
          function(prev,curr){
              return curr(prev);
          },n );
  }
};

function add_one (n) { return n+1; }
function less_one (n) { return n -1; }
function multiply_two (n) { return n * 2; }
function start (n) { return parseInt(n); }

const parseAddMultiplySubtract = compose2(start, add_one, multiply_two, less_one);

parseAddMultiplySubtract('1'); // 3

// ---------------------------------------------------------------------------
// Solution from board

var compose = function(...arg) {
	var rev = arg.reverse();
	return function(n) {
		return rev.reduce(function(acc, element) {
			console.log(acc);
			return element(acc);
		}, n);
	}
};

var compose2 = function(...arg) {
	var rev = arg
	return function(n) {
		return rev.reduce(function(acc, element) {
			console.log(acc);
			return element(acc);
		}, n);
	}
};

function add_one (n) { return n+1; }
function less_one (n) { return n -1; }
function multiply_two (n) { return n * 2; }
function start (n) { return parseInt(n); }

//const parseAddMultiplySubtract = compose(less_one, multiply_two, add_one, start);
const parseAddMultiplySubtract = compose2(start, add_one, multiply_two, less_one);

var result = less_one(multiply_two(add_one(start("1"))));

console.log("result: ", result);
parseAddMultiplySubtract('1'); // 3
