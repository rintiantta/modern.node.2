// 모듈을 추출합니다.
var fs = require('fs');
var http = require('http');
var express = require('express');

// 데이터베이스와 연결합니다.
var client = require('mysql').createConnection({
    user: 'root',
    password: '비밀번호',
    database: 'location'
});

// 웹 서버를 생성합니다.
var app = express();
var server = http.createServer(app);

// GET - /tracker
app.get('/tracker', function (request, response) {
    // Tracker.html 파일을 제공합니다.
    fs.readFile('Tracker.html', function (error, data) {
        response.send(data.toString());
    });
});

// GET - /observer
app.get('/observer', function (request, response) {
    // Observer.html 파일을 제공합니다.
    fs.readFile('Observer.html', function (error, data) {
        response.send(data.toString());
    });
});

// GET - /ShowData
app.get('/showdata', function (request, response) {
    // 데이터베이스의 데이터를 제공합니다.
    client.query('SELECT * FROM locations WHERE name=?', [request.param('name')], function (error, data) {
        response.send(data);
    });
});

// 웹 서버를 실행합니다.
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // join 이벤트
    socket.on('join', function (data) {
        socket.join(data);
    });

    // location 이벤트
    socket.on('location', function (data) {
        // 데이터를 삽입합니다.
        client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [data.name, data.latitude, data.longitude]);

        // receive 이벤트를 발생시킵니다.            
        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude,
            date: Date.now()
        });
    });
});
