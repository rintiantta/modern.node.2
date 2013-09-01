// 모듈을 추출합니다.
var net = require('net');

// TCP 서버를 생성합니다.
net.createServer(function (socket) {
    // 응답 헤더를 작성합니다.
    socket.write('HTTP/1.1 200 OK\n');
    socket.write('Server: RintIanTta Node.js Custom Server\n');
    socket.write('Content-Type: text/html');

    // 응답합니다.
    socket.end();
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
