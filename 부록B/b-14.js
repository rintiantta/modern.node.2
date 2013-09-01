// 모듈을 추출합니다.
var cluster = require('cluster');
var os = require('os');

// CPU COUNT를 출력합니다.
var cpuCount = os.cpus().length;
console.log('CPU Count:', cpuCount);

if (cluster.isMaster) {
    // 마스터 프로세서일 때
    for (var i = 0; i < cpuCount; i++) {
        console.log('cluster.fork()');
        cluster.fork();
    }
} else {
    // 워커 프로세서일 때
    console.log('console.log()');
}
