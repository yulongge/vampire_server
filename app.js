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


app.all('/vampire_server/*', function(req, res, next) {  
	if(req.headers.origin == "http://localhost:8080" || req.headers.origin == "https://geyulong.tech") {
		res.header("Access-Control-Allow-Origin", req.headers.origin);
		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
		res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
		res.header("Content-Type", "application/json;charset=utf-8");
	}

	console.log(req, req.cookies && req.cookies["account"], 'vampire_server req')
      
	if (req.method == 'OPTIONS') {
		res.send(200);
	} else {
		// if(req.cookies && req.cookies["account"] != null){
		// 	next();
		// } else {
		// 	res.redirect('/admin/login?' + Date.now());
		// }

		next();
		
	}
    
});
//连接数据库
//const connection = db.connection();

//遍历路由接口

const routes = walk(config.router_path)
		.map(p=>p.path)
		.filter(path=>/\.js$/.test(path))
        .forEach(part=>require(part)(app, config.router_prefix));

//监听小程序less文件
//require('./parseless');

app.use(function(req, res, next) {
	//next(createError(404));
})

module.exports = app;
