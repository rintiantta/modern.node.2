// 모듈을 추출합니다.
var http = require('http');

// server 객체를 생성합니다.
var server = http.createServer();

// server 객체에 이벤트를 연결합니다.
server.on('request', function () {
    console.log('Request On');
});
server.on('connection', function () {
    console.log('Connection On');
});
server.on('close', function () {
    console.log('Close On');
});

// listen() 메서드를 실행합니다.
server.listen(52273);
