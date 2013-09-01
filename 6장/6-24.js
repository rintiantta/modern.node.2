// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    request.on('data', function (data) {
        console.log('POST Data:', data);
    });
}).listen(52273);
