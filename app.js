const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const ejs = require('ejs');
const walk = require('klaw-sync');
const config = require('./config.js');
const db = require('./utils/db');

var app = express();
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));

//连接数据库
const connection = db.connection();

//遍历路由接口
const routes = walk(config.router_path)
		.map(p=>p.path)
		.filter(path=>/\.js$/.test(path))
        .forEach(part=>require(part)(app, config.router_prefix, connection));

//监听小程序less文件
require('./parseless');

app.use(function(req, res, next) {
	//next(createError(404));
})

module.exports = app;
