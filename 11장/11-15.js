// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버를 생성합니다.
var server = http.createServer(function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // id를 설정합니다.
    id = socket.id;

    // rint 이벤트
    socket.on('rint', function (data) {
        // private 통신
        io.sockets.sockets[id].emit('smart', data);
    });
});
