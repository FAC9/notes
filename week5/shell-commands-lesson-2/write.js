// Jen, Tom & John

const input = process.argv[2];
const fs = require('fs');

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

  // let writeStream = fs.createWriteStream(output, { 'flags': 'a' });
  // readStream.pipe(writeStream);
} else if (process.argv[3] === '>') {
    let output = process.argv[4];
    let writeStream = fs.createWriteStream(output);
    inputRead.pipe(writeStream);
  }
