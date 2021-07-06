

var ex = 10 + '20';
console.log(ex);

// 문자랑 더하게 되면 무조건 변수는 문자형이 됨
ex = 100 + '';

var logical = true + '';
console.log(typeof logical);

// 더하기가 아닌 다른 연산에서 숫자 뒤에 문자가 올경우 변수는 숫자형이 됨
var x = 100 - '30';  // ㅗ'30hello' (x)
console.log(x);