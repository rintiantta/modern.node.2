// 모듈을 추출합니다.
var fs = require('fs');

// TextFile1.txt 파일을 읽습니다.
fs.readFile('TextFile1.txt', function (error, data1) {
    // TextFile2.txt 파일을 읽습니다.
    fs.readFile('TextFile2.txt', function (error, data2) {
        // TextFile3.txt 파일을 읽습니다.
        fs.readFile('TextFile3.txt', function (error, data3) {
            // 출력합니다.
            console.log(data1);
            console.log(data2);
            console.log(data3);
        });
    });
});
