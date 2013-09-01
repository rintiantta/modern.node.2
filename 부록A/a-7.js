// 모듈을 추출합니다.
var net = require('net');

// TCP 서버를 생성합니다.
net.createServer(function (socket) {
    // 응답 헤더를 작성합니다.
    socket.write('HTTP/1.1 200 OK\n');
    socket.write('Server: RintIanTta Node.js Custom Server\n');
    socket.write('Content-Type: text/html\n');
    socket.write('Content-Length: 21\n');
    socket.write('\n');
    socket.write('<h1>Hello World!</h1>');

    // 응답합니다.
    socket.end();
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
