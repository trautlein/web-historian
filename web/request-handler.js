var path = require('path');
var helpers = require('../helpers/archive-helpers');
// require more modules/folders here!


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};


exports.handleRequest = function (req, res) {

  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  req.on('data', chunk => {
    console.log('indata: ', chunk.toString());
  });


  console.log(helpers.readListOfUrls());

  res.writeHead(201, headers);

  // get input from request


  // add input to sites.txt


  // send to loading page

  res.end();
  // res.end(archive.paths.list);
};
