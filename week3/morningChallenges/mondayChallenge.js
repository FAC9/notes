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
