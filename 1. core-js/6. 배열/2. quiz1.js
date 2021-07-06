

/*
# scores라는 이름을 가진 배열 변수가 있습니다.
  여기에는 학생들의 수학점수가 8개 저장됩니다.
  점수는 임의로 설정하세요.
- 요구사항:
1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
   콘솔에 출력하세요.
2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
   총점, 평균이 갱신되어야 합니다.
*/

var scores = [98, 32, 66, 87, 49, 12, 100, 82, 100];

// 총점 저장 변수
var total = 0;

// 전체 순회할 때 좋음, 홀수번 or 짝수번 배열 구하는건 어렵
for (var num of scores) {
    total += num;
}

// 홀수번 or 짝수번 배열 구하기
/*
for (var i = 0; i < scores.length; i++) {
    if (i % 2 === 0) {
        total += scores[i];
    }
}
*/

/*
for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
*/

var average = total / scores.length;
// 소수 둘째자리까지 나오게
var prettierAvg = Math.round(average * 100) / 100; // (average 10 ** 2) / 10 ** 2

console.log(`총점: ${total}점, 평균: ${prettierAvg}점`);
