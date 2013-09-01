// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        // GET 요청
        fs.readFile('HTMLPage_2.html', function (error, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (request.method == 'POST') {
        // POST 요청
        request.on('data', function (data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
