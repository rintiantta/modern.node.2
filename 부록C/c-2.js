// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();
app.use(express.bodyParser());
app.use(function (request, response) {
    response.send({
        method: request.method,
        query: request.query,
        body: request.body
    });
});

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
