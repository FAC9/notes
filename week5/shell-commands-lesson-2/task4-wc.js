// Marko & Will

var fs = require('fs');
var stdin = process.openStdin();
var count = 0;

stdin.on('data', function(chunk) {
  chunk = chunk.toString();
  count += chunk.split('\n').length - 1;
  console.log(count);
})

stdin.on('end', function() {
  console.log(count);
});
