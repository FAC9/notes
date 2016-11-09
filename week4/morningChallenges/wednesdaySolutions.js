// Team's solutions to https://github.com/bradreeder/Node-Shell-Workshop

// Peter & Will's Exercise 1:

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
   if(err){console.log(err);return;}
   console.log(contents);
});

//  Esraa & Ewelinas Exercise 2 & 3:

var fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  if (err) throw err;
  if ( process.argv[2] === "-ex" ) {
    files.forEach(function (fileName) {
      if (fileName.split('.')[1] === process.argv[3] ) {
        console.log(fileName);
      }
    });
    return;
  }
  files.forEach(function (fileName) {
    console.log(fileName);
  });

  // Nick & Marko's Exercise 4:

  #!/usr/bin/env node
var directories = process.cwd();
var fs = require("fs");

fs.readdir(directories, (err, files) => {

  var str = "";
  files.forEach(file => {
    if (/\./.test(file)) {
      str += file + "\t";
    } else {
      str += ('\x1b[3'+ Math.ceil(Math.random() * 7) + 'm') + file + '\x1b[0m';
    }
  });
  console.log(str)
})
