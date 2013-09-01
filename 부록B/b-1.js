// 모듈을 추출합니다.
var request = require('request');

// 요청합니다.
request('http://google.com', function (error, response, body) {
    // 출력합니다.
    console.log(body);
});
