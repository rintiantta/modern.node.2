// 모듈을 추출합니다.
var http = require('http');

// 기상청의 RSS 데이터를 긁어옵니다.
http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
    // 데이터를 다운로드합니다.
    response.setEncoding('utf8');
    response.on('data', function (data) {
        console.log('Data Download');
    });
});
