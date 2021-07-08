

// 원의 넓이 : pi * r ** 2

// 반지름이 5인 원의 넓이를 구해야 함
var circle1 = 3.14159265 * 5 ** 2;
// 반지름이 10
var circle2 = 3.14159265 * 10 ** 2;
// 반지름이 20
var circle2 = 3.14159265 * 20 ** 2;

//////////////// 다른 작업 한 3만줄 /////////////////////

// 반지름이 100
circle4 = 31.4159265 * 100 * 2;



///////////////////////////////////////////////////////

// 함수의 정의
function calcAreaCircle(r) {
    var areaCircle = 3.14159265 * r ** 2;
    return areaCircle;
}

// 함수의 호출
// 반지름 5인 원이 넓이
var result1 = calcAreaCircle(5);
console.log(`result1: ${result1}`);

// 반지름 10인
var result2 = calcAreaCircle(10);
console.log(`result2: ${result2}`);

//////////////// 코드 3만줄 썼음 /////////////////////

var result3 = calcAreaCircle(20);
console.log(`result3: ${result3}`);


// 함수의 정의 2 : 함수 리터럴
function add1(n1, n2) {
    return n1 + n2;
}
add1(10, 20)

var add2 = function(n1, n2) {
    return n1 + n2
};
add2(30, 50);


// 함수를 변수에 할당
var cac = calcAreaCircle;
cac(5);