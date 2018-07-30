const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const ejs = require('ejs');
const walk = require('klaw-sync');
const config = require('./config.js');
const db = require('./utils/db');

var routers = require('./routes/index');

var app = express();
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const connection = db.connection();
//app.use('/', routers);
const routes = walk(config.router_path)
		.map(p=>p.path)
		.filter(path=>/\.js$/.test(path))
        .forEach(part=>require(part)(app, config.router_prefix, connection));
        
console.log(routes, 'routes')

app.use(function(req, res, next) {
	//next(createError(404));
})

module.exports = app;