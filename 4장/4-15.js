// 모듈을 추출합니다.
var fs = require('fs');

// 모듈을 사용합니다.
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});
