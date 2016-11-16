// Cleo & Steve

var fs = require('fs');
var fileName = process.argv[2];

function streamFile (file, cb) {
  var readStream = fs.createReadStream(file);
  var fileContent = '';

  readStream.on('data', function(chunk) {
    fileContent += chunk;
  });

  readStream.on('error', function(err) {
    cb(err, fileContent);
  });

  readStream.on('end', function() {
    cb(null, fileContent);
  });
}

streamFile(fileName, function(err, file){
  if (err) throw err;
  console.log(file);
});

// Alternative one line version:
// require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
