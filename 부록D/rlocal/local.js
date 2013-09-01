// 모듈을 생성합니다. 
var local =  function () {
    console.log('Local Module');
};
local.number = 52273;

// exports 객체에 함수를 넣습니다.
exports = module.exports = local;
