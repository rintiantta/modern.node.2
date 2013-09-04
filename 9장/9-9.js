// 모듈을 추출합니다.
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    user: 'root',
    password: '비밀번호',
    database: 'Company'
});

// 서버를 생성합니다.
var app = express();
app.use(app.router);

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('server running at http://127.0.0.1:52273');
});

// 라우트를 수행합니다.
app.get('/', function (request, response) {
    // 파일을 읽습니다.
    fs.readFile('list.html', 'utf8', function (error, data) {
        // 데이터베이스 쿼리를 실행합니다.
        client.query('SELECT * FROM products', function (error, results) {
            // 응답합니다.
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function (request, response) { });
app.get('/insert', function (request, response) { });
app.post('insert', function (request, response) { });
app.get('/edit/:id', function (request, response) { });
app.post('/edit/:id', function (request, response) { });
