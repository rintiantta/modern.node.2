// 모듈을 추출합니다.
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var express = require('express');

// 생성자 함수를 선언합니다.
var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

// 변수를 선언합니다.
var products = [
    new Product('JavaScript', 'chrome.png', 28000, 30),
    new Product('jQuery', 'chrome.png', 28000, 30),
    new Product('Node.js', 'chrome.png', 32000, 30),
    new Product('Socket.io', 'chrome.png', 17000, 30),
    new Product('Connect', 'chrome.png', 18000, 30),
    new Product('Express', 'chrome.png', 31000, 30),
    new Product('EJS', 'chrome.png', 12000, 30)
];

// 웹 서버를 생성합니다.
var app = express();
var server = http.createServer(app);

// 웹 서버를 설정합니다.
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// 라우트를 수행합니다.
app.get('/', function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    var HTMLPage = fs.readFileSync('HTMLPage.html', 'utf8');

    // 응답합니다.
    response.send(ejs.render(HTMLPage, {
        products: products
    }));
});

// 웹 서버를 실행합니다.
server.listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    // 함수를 선언합니다.
    function onReturn(index) {
        // 물건 개수를 증가시킵니다.
        products[index].count++;

        // 타이머를 제거합니다.
        clearTimeout(cart[index].timerID);

        // 카트에서 물건을 제거합니다.
        delete cart[index];

        // count 이벤트를 발생시킵니다.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    };

    // 변수를 선언합니다.
    var cart = {};

    // cart 이벤트 
    socket.on('cart', function (index) {
        // 물건 개수를 감소시킵니다.
        products[index].count--;

        // 카트에 물건을 넣고 타이머를 시작합니다.
        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function () {
            onReturn(index);
        }, 1000 * 60 * 10);

        // count 이벤트를 발생시킵니다.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // buy 이벤트
    socket.on('buy', function (index) {
        // 타이머를 제거합니다.
        clearTimeout(cart[index].timerID);

        // 카트에서 물건을 제거합니다.
        delete cart[index];

        // count 이벤트를 발생시킵니다.
        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    // return 이벤트
    socket.on('return', function (index) {
        onReturn(index);
    });
});
