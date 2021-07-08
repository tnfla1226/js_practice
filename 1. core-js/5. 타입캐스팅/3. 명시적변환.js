

// 명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a +b ; // 빈문자열을 숫자에 더하면 문자열로 변환
console.log(`result: ${result}`);

// 명시적 숫자 변환
console.log('================================');

var m = '100', n = '5.11';

// var result2 = Number(m) + Number(n);
// var result2 = parseFloat(m) + parseFloat(n); //parseInt로 둘다하면 소수점 날라감, parseFloat으로 둘다 해도 소수점 그대로
var result2 = (+m) + (+n);
console.log(`result2: ${result2}`);

// 명시적 논리 변환
console.log('===============================');

var ex1 = Boolean(undefined);
console.log(`ex1: ${ex1}`);

var ex2 = !!'메롱';
console.log(`ex2: ${ex2}`);