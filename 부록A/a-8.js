// 모듈을 추출합니다.
var net = require('net');
var crypto = require('crypto');

//변수를 선언합니다.
var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

// TCP 서버를 생성합니다.
net.createServer(function (socket) {
    socket.on('data', function (data) {

    });
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
