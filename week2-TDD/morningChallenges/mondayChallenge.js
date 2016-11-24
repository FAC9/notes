function modulo(base,num) {
  return num % base;
}

function add(a,b) {
  return a + b;
}

test('Test addition functionality', function (t) {
  var res = add(1,2);
  t.equal(res,3,'got result 3');
});

test('Test modulo functionality', function (t) {
  var res = modulo(2,5);
  t.equal(res,1,'res is 1');
});
