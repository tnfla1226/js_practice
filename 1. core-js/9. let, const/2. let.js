
// 1. 중복 선언 허용하지 않음
let x = 3;
let x = 5;

// 2. 블록레벨 스코프 지원
let y = 10;
if (true) {
    let y = 20;
    console.log(`if의 수: ${y}`);
}
console.log(`전역변수: ${y}`);

// 3. 변수 호스팅을 일으키지 않음
z = 10;
console.log(z);

let z;