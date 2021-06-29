

var decimal = 100; //정수
var floatingPoint = 3.14; //실수

//typeof 연산자: 데이터 타입을 문자열로 알려줌
console.log(typeof decimal);
console.log(typeof floatingPoint);

var bin = 0b01000010; //2진수를 10진수로 변환해서 출력, 2진수 쓸땐 앞에 0b붙여서 씀
console.log(bin);

var oct = 0o102; //8진수를 10진수로 변환해서 출력
console.log(oct);

var hex = 0xAC00; //16진수를 10진수로 변환해서 출력
console.log(hex);

console.log(10 / 4); //저장될때 실수로 저장됨 -->2.5로

console.log(30 * '메롱'); //NaN로 뜸 (not-a-number)