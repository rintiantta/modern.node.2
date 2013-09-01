// 모듈을 추출합니다.
var fs = require('fs');
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(app.router);

// 라우터를 설정합니다.
app.get('/', function (request, response) { });
app.get('/login', function (request, response) { });
app.post('/login', function (request, response) { });

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
