/*jslint undef: true */
'use strict';

var express, app, path, port;

express = require('express');
app			= express();
path		= require('path');
port		= process.env.PORT || 8000;

app
.use(express.static(__dirname + '/'))
.get('/', function (request, response) {
	response.sendFile((path.join(__dirname + '/index.html')));
});
app.listen(port);
console.log('ETDA Server is ready!! (http://localhost:' + port + ')'); 