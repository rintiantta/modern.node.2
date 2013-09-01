// 모듈을 추출합니다.
var async = require('async');

// 변수를 선언합니다.
var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

// 파일을 읽습니다.
async.forEach(files, function (item, index) {
    console.log(item);
});
