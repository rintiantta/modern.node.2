// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    // ejsPage.ejs 파일을 읽습니다.
    fs.readFile('ejsPage.2.ejs', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(ejs.render(data, {
            name: 'RintIanTta',
            description: 'Hello ejs With Node.js .. !'
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});
