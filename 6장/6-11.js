// 모듈을 추출합니다.
var fs = require('fs');
var http = require('http');

// 52273번 포트에 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // 이미지 파일을 읽습니다.
    fs.readFile('Chrysanthemum.jpg', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 52274번 포트에 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // 음악 파일을 읽습니다.
    fs.readFile('Kalimba.mp3', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });
}).listen(52274, function () {
    console.log('Server Running at http://127.0.0.1:52274');
});
