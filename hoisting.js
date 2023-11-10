
// 호이스팅 : 변수 및 함수 선언이 스코프 내에서 최상단으로 끌어올려지는 특성을 말합니다

// 변수의 호이스팅 -> 첫번째 라인의 시점에서 x의 값이 정의 되지 않았지만 아래 x의 값이 정의되어 에러가 발생하지 않는다.
console.log(x); // ReferenceError: x is not defined
var x = 5;
console.log(x);



// 함수의 호이스팅 -> 첫번째 라인의 시점에서 hello()함수가 정의 되지 않았지만 아래 라인에서 hello() 함수가 정의되어 에러가 발생하지 않는다.

hello();
function hello(){
    console.log("Hello, world");
}


// let 및 const 변수 호이스팅 -> var 변수의 호이스팅이라면 에러가 발생하지 않지만 , 'let' 과 'const' 변수는 초기화 하기 전에 접근하게 되면 에러가 발생한다. 
console.log(y);
let y = 10;
console.log(y);