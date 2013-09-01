// 모듈을 추출합니다.
var fs = require('fs');

// 모듈을 사용합니다.
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);
