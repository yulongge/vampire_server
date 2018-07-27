var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var ejs = require('ejs');

var routers = require('./routes/index');

var app = express();
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routers);

app.use(function(req, res, next) {
	next(createError(404));
})

module.exports = app;