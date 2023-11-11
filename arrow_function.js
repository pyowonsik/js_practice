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