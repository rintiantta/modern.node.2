// 모듈을 변수에 저장합니다.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버를 만듭니다.
var server = http.createServer(function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    fs.readFile('HTMLPage.4.html', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 만듭니다.
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    // message 이벤트
    socket.on('message', function (data) {
        // 클라이언트의 message 이벤트를 발생시킵니다.
        io.sockets.emit('message', data);
    });
});
