// 모듈을 추출합니다.
var http = require('http');
var fs = require('fs');

// 기상청의 RSS 데이터를 긁어옵니다.
http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function (response) {
    // 변수를 선언합니다.
    var result = '';

    // 데이터를 다운로드합니다.
    response.setEncoding('utf8');
    response.on('end', function () {
        // XMLFile.xml 파일을 씁니다.
        fs.writeFile('XMLFile.xml', result);
    }).on('data', function (data) {
        result += data;
    });
});
