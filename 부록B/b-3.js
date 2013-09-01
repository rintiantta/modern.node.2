// 모듈을 추출합니다.
var cheerio = require('cheerio');
var request = require('request');

// request 모듈을 사용합니다.
request('https://github.com/languages', function (error, response, body) {
    // 변수를 선언합니다.
    var $ = jQuery = cheerio.load(body);
});
