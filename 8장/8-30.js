// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.cookieParser());
app.use(express.session({ secret: 'secret key' }));
app.use(express.bodyParser());
app.use(function (request, response) {
    // 변수를 선언합니다.
    var output = {};
    output.cookies = request.cookies;
    output.session = request.session;

    // 세션을 저장합니다.
    request.session.now = (new Date()).toUTCString();

    // 응답합니다.
    response.send(output);
});

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
