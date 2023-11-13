function getNumber(){
    var number = 5;
    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number);
// console.log(getNumber());

function getNumber(){
    var number = 5;
    function innerGetNumber(){
        return number;
    }
    return innerGetNumber;
}

const runner = getNumber();
// console.log(runner);
// console.log(runner());

// 상위 함수에서 하위 함수를 반환 함으로써,
// 상위함수가 먼저 실행이 끝나고 하위 함수를 나중에 실행 할수 있는 기능
// 1) 데이터 캐싱
function cacheFunction(newNumb) {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    // 함수를 실행해서 반환하는것이아니라 실행할 준비인 상태로 반환
    // 그렇게 되면 number는 기억이 되기 때문에 number의 계산이 필요없음
    return innerCacheFunction;  
}


const runner2 = cacheFunction();    // cashFunction을 통해 number값을 계산을 해두고
console.log(runner2(10));           // 값만 넣어주면 빠른 계산이 가능하다.
console.log(runner2(20));



// 데이터 캐싱 2 : 반복적으로 특정값을 변환해야 할때
function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());


// 정보 은닉
function Idol(name,year){
    this.name = name;
    var _year = year;
    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`
    }
}


const yuJin = new Idol('안유진',2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year); // 출력시 year는 저장을 해두고 있지 않기 때문에 내부 함수 호출을 통해서만 접근가능하다.
