// 모듈을 추출합니다.
var cheerio = require('cheerio');
var request = require('request');

// request 모듈을 사용합니다.
request('https://github.com/languages', function (error, response, body) {
    // 변수를 선언합니다.
    var $ = jQuery = cheerio.load(body);

    // 데이터를 추출합니다.
    $('.left tr').each(function (item) {
        // 변수를 선언합니다.
        var language = $(this).find('td:first-child').text().trim();
        var percentage = $(this).find('td:last-child').text().trim();

        // 출력합니다.
        console.log(language, percentage);
    });
});
