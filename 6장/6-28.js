// 모듈을 추출합니다.
var http = require('http');

// 모듈을 사용합니다.
http.createServer(function (request, response) {
    // 쿠키를 추출하고 분해합니다.
    var cookie = request.headers.cookie;
    cookie = cookie.split(';').map(function (element) {
        var element = element.split('=');
        return {
            key: element[0],
            value: element[1]
        };
    });

    // 쿠키를 생성합니다.
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
    });

    // 응답합니다.
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
