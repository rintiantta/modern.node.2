// 모듈을 추출합니다.
var crypto = require('crypto');

// 해시를 생성합니다.
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 출력합니다.
console.log('crypto_hash:', output);
