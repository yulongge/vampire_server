var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

//同步读取密钥和签名证书
var options = {
    key:fs.readFileSync('./keys/ca.key'),
    cert:fs.readFileSync('./keys/ca.crt')
}
var https_port = 443,
	http_port = 3000;

var app = express();
var httpsServer = https.createServer(options,app);
var httpServer = http.createServer(app);

app.get('/',function(req,res,next){
	res.send('Welcom to my heart!');
});
//https监听443端口
httpsServer.listen(https_port, function(){
	const {address, port} = httpsServer.address();
	console.log(`https listening at ${address}:${port}`)
});
//http监听3000端口
httpServer.listen(http_port, function() {
	const {address, port} = httpServer.address();
	console.log(`http listening at ${address}:${port}`)
});
