// 모듈을 추출합니다.
var async = require('async');

// series() 메서드를 실행합니다.
async.parallel([
    function (callback) {
        // 첫 번째 함수를 실행합니다.
        console.log('First Function Start');

        // 2초 후에 함수를 실행합니다.
        setTimeout(function () {
            console.log('First Function End');
            callback(null, 1);
        }, 2000);
    },
    function (callback) {
        // 두 번째 함수를 실행합니다.
        console.log('Second Function Start');

        // 1초 후에 함수를 실행합니다.
        setTimeout(function () {
            console.log('Second Function End');
            callback(null, 2);
        }, 1000);
    }
], function (error, result) {
    console.log('Last Function:', result);
});
