// 모듈을 추출합니다.
var net = require('net');

// 모듈을 사용합니다.
var socket = net.connect(52273, '127.0.0.1', function () {
    console.log('Client Start');
});

// 이벤트를 연결합니다.
socket.on('data', function (data) {
    console.log(data.toString());
});
