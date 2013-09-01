// process.argv
process.argv.forEach(function (item, index) {
    // 출력합니다.
    console.log(index + ' : ' + typeof (item) + ' : ', item);

    // 실행 매개 변수에 --exit가 있을 때
    if (item == '--exit') {
        // 다음 실행 매개 변수를 얻습니다.
        var exitTime = Number(process.argv[index + 1]);

        // 일정 시간 후 프로그램을 종료합니다.
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});
