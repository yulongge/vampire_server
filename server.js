var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

//同步读取密钥和签名证书
var options = {
    key:fs.readFileSync('./keys/ca.key'),
    cert:fs.readFileSync('./keys/ca.crt')
}

var app = express();
var httpsServer = https.createServer(options,app);
var httpServer = http.createServer(app);

app.get('/',function(req,res,next){
        res.send('Hello Express+https');
});
//https监听3000端口
httpsServer.listen(443);
//http监听3001端口
httpServer.listen(3001);
