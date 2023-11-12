const add1 = function (a,b) {
    return a + b;
}

const add2 = (a,b) => {
    return a + b;
}

function printArr1(arr){

    for(i in arr){
        console.log(i);
    }
}

const printArr2 = (arr) => {
   for(const element of arr){
     console.log(element);
   }
}

const isSmall = function (a,b){
    a < b ? console.log(a) : console.log(b);
}

const isBig = (a,b) => {
    a > b ? console.log(a) : console.log(b);
}


console.log(add1(2,1));
printArr2(['오렌지','레몬','귤']);

isBig(10,20);
isSmall(20,30);

function Counter() {
    this.count = 0;
  
    setInterval(() => {
      // Arrow 함수는 자신만의 this를 갖지 않음
      this.count++;
      console.log(this.count);
    }, 10);
  }
  
  const counter = new Counter();

  

  