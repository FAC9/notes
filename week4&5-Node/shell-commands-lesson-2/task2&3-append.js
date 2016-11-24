// Cloe & Steve

var fs = require('fs');
var fileName = process.argv[2];
var readStream = fs.createReadStream(fileName);
var flags = {};
var outputToFile = ['>','>>'].indexOf(process.argv[3]) !== -1;

if (process.argv[3] === '>>'){
  flags = {'flags':'a'};
}

var writeStream = outputToFile ? fs.createWriteStream(process.argv[4], flags): process.stdout;

readStream.pipe(writeStream);
