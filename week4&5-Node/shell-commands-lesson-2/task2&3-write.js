// Jen, Tom & John

const input = process.argv[2];
const fs = require('fs');

// Task 3

// Append file manually
let inputRead = fs.createReadStream(input, 'utf8');

if (process.argv[3] === '>>') {
  let output = process.argv[4];
  let outputRead = fs.createReadStream(output, 'utf8');
  let wholefile = ''
  outputRead.on('data', function(chunk) {
    wholefile += chunk;
  } );
  outputRead.on('end', function () {
    inputRead.on('data', function(chunk) {
      wholefile += chunk;
    })
    inputRead.on('end', function() {
      let outputStream = fs.createWriteStream(output, 'utf8')
      outputStream.end(wholefile);
    })
  })

// Or: append file using 'a' flag
  /*
  if (process.argv[3] === '>>') {
    let writeStream = fs.createWriteStream(output, { 'flags': 'a' });
    readStream.pipe(writeStream);
  }
  */

// Task 2
} else if (process.argv[3] === '>') {
    let output = process.argv[4];
    let writeStream = fs.createWriteStream(output);
    inputRead.pipe(writeStream);
  }
