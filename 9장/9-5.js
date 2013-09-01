// 모듈을 추출합니다.
var mysql = require('mysql');

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    user: 'root',
    password: '비밀번호'
});

// 데이터베이스 쿼리를 사용합니다.
client.query('USE Company');
client.query('SELECT * FROM products', function (error, result, fields) {
    if (error) {
        console.log('쿼리 문장에 오류가 있습니다.');
    } else {
        console.log(result);
    }
});
