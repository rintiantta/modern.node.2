// 서버를 생성 및 실행합니다.
require('http').createServer(function (request, response) {
    if (request.url == '/') {
        // 응답합니다.
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('    <title>Forever</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('    <h1>Forever</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else {
        // 오류를 발생합니다.
        error.error.error();
    }
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});
