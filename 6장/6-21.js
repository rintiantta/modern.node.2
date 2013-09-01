// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버를 생성 및 실행합니다.
http.createServer(function (request, response) {
    // 변수를 선언합니다.
    var pathname = url.parse(request.url).pathname;

    // 페이지를 구분합니다.
    if (pathname == '/') {
        // Index.html 파일을 읽습니다.
        fs.readFile('index.html', function (error, data) {
            // 응답합니다.
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    } else if (pathname == '/OtherPage') {
        // OtherPage.html 파일을 읽습니다.
        fs.readFile('otherpage.html', function (error, data) {
            // 응답합니다.
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(data);
        });
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
