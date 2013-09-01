// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(function (request, response) {
    // User-Agent 속성을 추출합니다.
    var agent = request.header('User-Agent');

    // 브라우저를 구분합니다.
    if (agent.toLowerCase().match(/chrome/)) {
        // 페이지를 출력합니다.
        response.send('<h1>Hello Chrome .. !</h1>');
    } else {
        // 페이지를 출력합니다.
        response.send('<h1>Hello express .. !</h1>');
    }
});

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
