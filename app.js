/** 
 * DIY Static Server Example
 *
 * @package diy-simp-server
 * @author jllord <to.jlord@gmail.com>
 */


// Dependencies
// These are Node.js core modules we'll be using
var fs      = require('fs'),
		http    = require('http');

// What to do when our server gets a request
function requestHandler (request, response) {
    var fileLocation    = __dirname + '/index.html';
    var fileStream      = fs.createReadStream(fileLocation)
    fileStream.pipe(response);
}
// Create the server
var server = http.createServer(requestHandler);
// Tell the server to start listening for requests
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port 3000');


