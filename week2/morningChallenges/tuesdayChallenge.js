test('ONE', t => {
  t.equal(1,1,'1');
  setTimeout(() => {
    t.equal(2,2,'2');
    t.end();
  });
});

test('TWO', t => {
  t.equal(3,3,'3');
});

test.init();
