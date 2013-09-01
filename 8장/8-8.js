// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어 설정(1)
app.use(function (request, response, next) {
    console.log("첫 번째 미들웨어");
    next();
});

// 미들웨어 설정(2)
app.use(function (request, response, next) {
    console.log("두 번째 미들웨어");
    next();
});

// 미들웨어 설정(3)
app.use(function (request, response, next) {
    console.log("세 번째 미들웨어");

    // 응답합니다.
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>express Basic</h1>');
});

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
