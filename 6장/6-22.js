// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    if (request.method == 'GET') {
        console.log('GET 요청입니다.');
    } else if (request.method == 'POST') {
        console.log('POST 요청입니다.');
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
