/* Express.js is a lightweight HTTP framework for node.js */
var express = require('express');

/* Express middleware (bodyParser, Morgan) 
 * Middleware are functions that receive the request and 
 * response objects of an HTTP request/response cycle.
 */

/* body-parser is a node.js middleware for handling 
 * JSON, Raw, Text and URL encoded form data.
 */
var bodyParser = require('body-parser');

/* 
 * Morgan is another HTTP request logger middleware for Node.js. 
 * It simplifies the process of logging requests to your application. 
 * You might think of Morgan as a helper that collects logs from 
 * your server, such as your request logs.
 * see terminal for its output when the applciation is running..
 */
var morgan = require('morgan');

/* Mongoose is an mongodb object modelling API for node.js.
 * It brings schema’s and models to Node.js / Mongodb (NoSQL).
 */
var mongoose = require('mongoose');

/* see config.js for all the configurations of the project */
var config = require('./config');

/* create an express app */
var app = express();

/* use the middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

/* connect to the database */
mongoose.connect(config.database, function(error) {
	if (error)
		console.log(error)
	else
		console.log("Connected to the database on mongolab.com")
});

/* create an API (post and get) */
var API = require('./app/routes/api.js')(app, express);
app.use('/api', API);

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/app/views/index.html');
});

app.listen(config.port, function(error) {
	if (error)
		console.log(error);
	else 
		console.log("listening on port 3000");
});









