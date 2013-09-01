// 모듈을 추출합니다.
var http = require('http');

// 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // 쿠키를 입력합니다.
    response.writeHead(200, {
        'Content-Type': 'text/html ',
        'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
