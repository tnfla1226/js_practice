
var greeting;
greeting = 'hello';
greeting = "안녕";
greeting = `hi`;
console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다!';

exStr = "Let'go!";

// 자바나 C언어 안에서
exStr = "그는 나에게 \"위험해\"라고 말했다!";
console.log(exStr);

//탈출문자 앞에는 \두번 쓰기 
var filePath = 'D:\\temp\\new.jpg';
console.log(filePath);

//템플릿 리터럴 (ES6+)
console.log("==================================");

//var template = '<ul>\n<li>\n\t\t<a href="home">Home</a>\n\t</li>\n</ul>';
var template = `<ul>
    <li>
        <a herf="#">HOMEM</a>
    </li>
</ul>
`;
console.log(template);
console.log("==================================");

var month = 8;
var day = 15;
var anni = '광복절';

// console.log(month + '월 ' + day + '일은 ' + anni + '입니다.');
console.log(`${month}월 ${day}일은 ${anni}입니다.`); //무조건 백틱으로만

var x = '100';
var y = '200';
console.log(x + y);