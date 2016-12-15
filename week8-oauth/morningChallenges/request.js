// Eoin's solution : https://github.com/dwyl/hapi-auth-github/blob/master/lib/http_request.js

// Group solution below

var http = require('http');

const request = (options, cb) => {
  var req = http.request(options, (response) => {
    let str = '';
    response.setEncoding('utf8');
    response.on('error', cb);
    response.on('data', (chunk) => {
      str += chunk;
    });
    response.on('end', () => {
      cb(null, str)
    });
  });

  req.on('error', (e) => {
    cb(e);
  });

  // write data to request body
  req.write('done');
  req.end();
};

let options = {
  hostname: 'www.foundersandcoders.com',
  path: '/',
  method: 'GET'
};

request(options, (err, data) => {
  if (err) throw err;
  console.log(data);
});
