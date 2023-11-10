
// 클로저 1
function outerFunction(x){

    function innerFunction(y){
        console.log(x+y);
    }

    return innerFunction;
}
let closure = outerFunction(10);
closure(5);

// 클로저 2
function outer(){
    let outerVariable = 'This is OUTER';
    const innerFunction= function(){
        console.log(outerVariable);
    }
    return innerFunction;
}
const temp = outer();
temp();

// private 변수 구현 -> 클로저를 사용하여 특정 함수 내에서만 접근 가능한 private 변수를 구현할 수 있습니다. 외부에서 직접 접근이 불가능하며, 클로저를 통해만 접근 가능합니다. 
function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter =createCounter();
counter();
counter();

// 콜백함수 -> 클로저를 사용하여 함수 내에서 다른 함수를 반환하면서 외부 변수에 접근할 수 있습니다. 이는 콜백 함수의 상태를 유지하면서 사용할 때 유용합니다.
function doSomethingWithDelay(message,delay){
    setTimeout(function(){
        console.log(message);
    },delay);
}

doSomethingWithDelay('Hello after 2 seconds!',2000);

// 모듈 패턴 : 클로저를 사용하여 모듈 패턴을 구현할 수 있습니다. 모듈 패턴은 변수와 함수를 캡슐화하고 외부에 노출시키지 않는 방법을 제공합니다.
const calculator =(function(){
    let result = 0;
    return {
        add : function(x) {
            result += x;
        },
        subtract : function(x){
            result -= x;
        },
        getResult : function(){
            return result;
        }
    }
})();

calculator.add(5);
calculator.subtract(3);
console.log(calculator.getResult());
