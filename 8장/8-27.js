// 모듈을 추출합니다.
var fs = require('fs');
var http = require('http');
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.cookieParser());
app.use(express.limit('10mb'));
app.use(express.bodyParser({ uploadDir: __dirname + '/multipart' }));
app.use(app.router);

// 라우터를 설정합니다.
app.get('/', function (request, response) {
    fs.readFile('HTMLPage.html', function (error, data) {
        response.send(data.toString());
    });
});
app.post('/', function (request, response) {
    console.log(request.body)
    console.log(request.files);

    response.redirect('/');
});

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
