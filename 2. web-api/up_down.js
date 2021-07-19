

// 전역변수 선언 부분
// 필요한 데이터: 랜덤숫자 정답, 최소값, 최대값, 카운트다운, 정답입력횟수
const MIN = 1;
const MAX = 100;
const gameDatas = {
    secretNumber: Math.floor(Math.random() * MAX - MIN + 1) + MIN,
    min: MIN,
    max: MAX,
    countDown: 5,
    count: 0
};


// 함수 정의 부분

// 사용자의 승패 여부를 확인해서 알림창으로 알려주는 함수
function checkCountDown(countDown) {
    if (countDown >= 0) {
        alert('YOU WIN');
    } else {
        alert('YOU LOSE');
    }
}

// 사용자에게 남은 정답기회를 알려주는 함수
function alertCount(countDown) {
    if (countDown > 0) {
        alert(`정답기회가 ${countDown}번 남았네요!!`)
    } else {
        alert(`정답 기회 모두 소진! 문제는 계속 풀어주세요!`)
    }
}

// 사용자에게 입력받은 정답을 가지고 UP. DOWN 유무를 체크하는 함수
function checkAnswer() {

    // 객체 디스트럭쳐링(ES6+)
    // const [one, two, three, four, five] = [1,2,3,4,5];
    const {secretNumber, answer, count, countDown} = gameDatas;

    if (secretNumber === answer) {
        // countDown 안에 맞췄는지 여부를 판단하는 함수 호출
        alert(`정답입니다! ${count}번만에 맞추셨군요!!`);
        checkCountDown(countDown);
        return true;
    } else if (secretNumber > answer) {
        alert('UP!!');
        gameDatas.min = answer;
    } else {
        alert('DOWN!!');
        gameDatas.max = answer;
    }
    alertCount(countDown);
    return false;
}

// 사용자에게 정답을 입력받고 카운트, 카운트다운 처리를 수행하는 함수
function inputAnswer() {
    gameDatas.answer = +prompt(`숫자를 입력하세요! [${gameDatas.min}~${gameDatas.max}]`)

    gameDatas.count++;
    gameDatas.countDown--;

    console.log(gameDatas);

    // 사용자의 입력값을 검증하는 함수 호출
    return checkAnswer();
}

// 메인 실행 부분
(function () {

    // 게임 시작 안내 메시지
    alert(`[UP & DOWN 게임 ${MIN}~${MAX}사이의 숫자를 맞춰보세요!]`);


    while (true) {
        // 사용자 입력 처리 함수 호출
       if (inputAnswer()) break;
    }

})();