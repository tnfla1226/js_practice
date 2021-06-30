

//동등 비교
console.log(5 == 5);

//자바스크립트는 타입이 달라도 암묵적으로 내부 숫자가 같으면
//문자열 5를 숫자 5로 변환시킴.
console.log(5 == '5');

//일치 비교 : 값뿐만 아니라 타입도 체크해서 같아야 true로 판단
console.log('======================================');
console.log(5 === 5);
console.log(5 === '5');

//동등 비교(==, !=)sms 결과 예측이 명시적으로 쉽지 않으므로
//사용하지 않는 것을 추천, 대신 일치 비교(===, !==)를 사용할 것
console.log('======================================');
console.log('0' == ''); //false
console.log(0 == ''); //true
console.log('0' == 0); //true
console.log(false == 'false'); //false
console.log(false == '0'); //true

//대소 비교
console.log('======================================');

var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자열 대소 비교
console.log('======================================');

console.log('apple' === 'APPLE'); //false (대소문자 구분 --> A는 65 / a는 97)

console.log('ace' < 'ade'); //true
console.log('복숭아' < '감자'); //false

/*
    문자열 대소 비교는 같은 문자(영어소문자, 한국어, 일본어 등)
    일 경우 사전에서 뒤에 나오는 단어일수록 크다고 판단됨

    단 유니코드는 숫자 크기로 비교하므로
    영문 대문자 < 영문 소문자 < 한글
*/