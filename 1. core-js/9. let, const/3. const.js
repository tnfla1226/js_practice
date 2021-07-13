

const pi = 3.1459265;
// 선언된 상수 값 변경할 수 없음
// pi = 6.666;
console.log(`pi: ${pi}`);

// 세율
const TAX_RATE = 0.1;

let preTaxPrice = 100; // 세전가격
// 세후가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);


// const와 객체 (배열, 객체)
const person = {
    name: 'park'
};

// 객체 자체 변경은 불가능
/*
person = {
    name : 'lee'
};
*/

// const로 선언 해도 프로퍼티는 변경 가능
// 객체, 배열객체는 거의 const로 선언
person.name = 'kim';

const arr = [1,2,3];
// arr = ['a', 'b', 'c'];

arr[1] = 20;

// 대부분의 값을 const로 선언하고 변경이 필요한 값은 let으로 변경하는게 좋음


// ================================================= //


// 전역변수
const x = 10;
const y = 20;

// 함수
function foo() {

}
function bar() {

}


// 실행영역과 생성영역을 분리해서 관리할때
// 즉시 실행 함수
(function() {
    // 실제 실행코드
    foo();
    const z = 10;
    bar();
})();


