// 모듈을 추출합니다.
var fs = require('fs');

// 서버를 생성합니다.
var server = require('http').createServer();
var io = require('socket.io').listen(server);

// 서버를 실행합니다.
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 웹 서버 이벤트를 연결합니다.
server.on('request', function (request, response) {
    fs.readFile('HTMLPage.2.html', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
});

// 소켓 서버 이벤트를 연결합니다.
io.sockets.on('connection', function (socket) {
    // 변수를 선언합니다.
    var name = null;

    // setname 이벤트가 발생할 때
    socket.on('setname', function (data) {
        name = data;
    });

    // getname 이벤트가 발생할 때
    socket.on('getname', function () {
        // 데이터를 전송합니다.
        socket.emit('responsename', name);
    });
});
