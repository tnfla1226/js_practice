
// x ~ y 까지의 누적합을 구하는 함수 정의
function calcRangeTotal(begin, end) {
    // console.log(`x: ${x}, y: ${y}`);
    var total = 0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    return total;
}


// 함수를 호출할때 함수에 전달하는 값 1, 10을 인수(argument)라고 함.
var result1 = calcRangeTotal(1, 10);
console.log(`result1: ${result1}`);

var result2 = calcRangeTotal(10, 20, 30); // 파라미터 하나만 적으면 end값은 undefined, 3개 적으면 실행은 잘 되지만 30은 쓸모없음
console.log(`result2: ${result2}`);


// 함수 정의
// ES6+ : 함수 매개변수의 기본값 설정 (값을 안넣었을때)
function sayHello(language='한국어') {

    // ES5 : 과거버전
    // language = language || '한국어';

    if (language === '한국어') {
        console.log('안녕~');
    } else if (language === '영어') {
        console.log('hello~');
    } else if (language === '중국어') {
        console.log('니하오~');
    }
}

console.log('=====================================');

sayHello();

// 매개변수가 없는 함수
function selectRandomFood() {
    var rn = Math.random();
    if (rn > 0.66) {
        return '짜장면';
    } else if (rn > 0.33) {
        return '볶음밥';
    } else {
        return '짬뽕';
    }
}

var food = selectRandomFood();
console.log(`선택된 음식: ${food}`);

// 함수의 인수값의 타입이 잘못 전달되는 경우
function multiply(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        console.log('인수를 숫자로 전달하세요!');
        return; // 함수를 강제 종료
    }
    return n1 * n2;
}

var result3 = multiply(5, 9);
console.log(`result3: ${result3}`);