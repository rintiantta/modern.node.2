// 데이터베이스에 연결합니다.
var db = require('mongojs').connect('node', ['products']);

// 데이터를 추출합니다.
db.products.find(function (error, data) {
    console.log(data);
});
