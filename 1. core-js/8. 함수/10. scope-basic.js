

function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);
}

console.log('============================');
// console.log(x);
// console.log(y);
foo(5);


console.log('============================');

// 지역변수와 전역변수는 저장이 따로따로됨, 함수가 호출되면 지역변수는 사라짐
// 지역변수가 없으면 전역변수를 가져옴

var z = 'global'; // 전역변수

function bar() {
    var z = 'local'; // 지역변수
    console.log(`함수내부: ${z}`);
}

bar();
console.log(`함수외부: ${z}`);
