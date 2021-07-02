
/*
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        콘솔에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 2~9단 중 무작위로 구구단이 등장하게 하세요.
2. for문과 while문으로 각각 구현하세요.
힌트) 먼저 2단을 구현해 본 뒤, 성공하면 랜덤 구구단으로 바꿔보기
- 출력 예시
====================
랜덤 구구단 4단
====================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
*/



var num1 = Math.floor(Math.random() * 7) + 2;
var num2 = 1;

console.log('====================');
console.log(`랜덤 구구단 ${num1}단`);
console.log('====================');

 while (num2 <= 9) {
        console.log(`${num1} X ${num2} = ${num1 * num2}`);
        num2++;
 }



var num3 = Math.floor(Math.random() * 7) + 2;

console.log('====================');
console.log(`랜덤 구구단 ${num3}단`);
console.log('====================');

for (num4 = 1; num4 <= 9; num4++) {
        console.log(`${num3} X ${num4} = ${num3 * num4}`);
}
