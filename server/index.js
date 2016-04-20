"use strict"

var server = (function() {
	var express = require('express');

	var app = express();
	var http = require('http').Server(app);
	var io = require('socket.io')(http);

	var basePath = require('path').dirname(process.mainModule.filename);

	app.use('/static', express.static(basePath + '/app/bower_components'));

	app.get('/', function(req, res){
		res.sendFile(basePath + '/app/index.html');
	});

	io.on('connection', function(socket) {
		console.log('a user connected');
	});

	http.listen(3000, function(){
		console.log('listening on *:3000');
	});
})();

module.exports = server;