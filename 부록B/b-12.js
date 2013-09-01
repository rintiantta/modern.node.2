// 모듈을 추출합니다.
var async = require('async');

// series() 메서드를 실행합니다.
async.series({
    first: function (callback) {
        console.log('First Function');
        callback(null, 1);
    },
    second: function (callback) {
        console.log('Second Function');
        callback(null, 2);
    },
    third: function (callback) {
        console.log('Third Function');
        callback(null, 3);
    }
}, function (error, result) {
    console.log('Last Function:', result);
});
