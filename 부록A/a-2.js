// 모듈을 추출합니다.
var net = require('net');

// TCP 서버를 생성합니다.
net.createServer(function (socket) {
    // 이벤트를 연결합니다.
    socket.on('data', function (data) {
        // 입력받은 데이터를 출력합니다.
        console.log(data.toString('utf8'));

        // 클라이언트에게 데이터를 전달합니다
        socket.write(data);
    });
}).listen(52273, function () {
    console.log('TCP Server Running at 127.0.0.1:52273');
});
