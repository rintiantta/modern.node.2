// 모듈을 추출합니다.
var fs = require('fs');

// 파일을 읽습니다.
fs.readFile('textfile.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

// 파일을 씁니다.
fs.writeFile('textfile.txt', 'Hello World .. !', 'utf8', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('FILE WRITE CONPLETE');
    }
});
