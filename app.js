/** 
 * DIY Static Server Example
 *
 * @package diy-simp-server
 * @author jllord <to.jlord@gmail.com>
 */


/**
 * Dependencies
 */
var fs      = require('fs'),
		http    = require('http');

/**
 * Server
 */
http.createServer(function (request, response) {fs.createReadStream(__dirname + '/index.html').pipe(response);}).listen(3000);

console.log('Listening on port 3000');