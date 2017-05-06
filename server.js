'use strict';
var express = require('express');
var session = require('express-session');
var path = process.cwd();
var app = express();
var moment = require('moment');
require('dotenv').load();
app.use('/public', express.static(process.cwd() + '/public'));

app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true
}));

app.route('/')
	.get(function (req, res) {
		res.sendFile(path + '/public/index.html');
  });
app.route('/:timestamp')
	.get(function (req, res) {
		var obj = {natural: null, unix: null};
		var timestamp = req.params.timestamp;
		// this is not so great
		if(moment.unix(timestamp).isValid() && timestamp >= 1000000) {
			obj = {natural: moment.unix(timestamp).format('MMMM DD, YYYY'), unix: timestamp};
		}
		// this is also not great
		else if (moment(timestamp).isValid() && timestamp.length > 8) {
			obj = {natural: moment.utc(timestamp).format('MMMM DD, YYYY'), unix: moment.utc(timestamp).unix()};
		}
		res.json(obj);
  });

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
