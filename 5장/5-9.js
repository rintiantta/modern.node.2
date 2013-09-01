// 변수를 선언합니다.
var onUncaughtException = function (error) {
    // 출력합니다.
    console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');

    // 이벤트를 제거합니다.
    process.removeListener('uncaughtException', onUncaughtException);
};

// 이벤트를 연결합니다.
process.on('uncaughtException', onUncaughtException);

// 2초마다 함수를 실행합니다.
setInterval(function () {
    // 예외를 발생시킵니다.
    error.error.error('^_^');
}, 2000);
