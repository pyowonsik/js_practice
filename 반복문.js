
// for
let arr1 = [1,2,3,4,5,6];
for (let i = 0 ; i <arr1.length;i++){
    if(i == 3) continue;
    console.log(arr1[i]);
}

// for in
const obj ={
    name : "이름",
    age : "나이"
}

for(const key in obj){
    console.log(key);   // 키 값 출력
    console.log(obj.name,obj.age)
}


// for...of
const arr2 = ['1번','2번','3번'] 

for(const element of arr2) {
    console.log(element);   // 요소
    console.log(arr2);      // 배열 전체
}


// forEach()
const arr3 = ['1번','2번','3번'];
arr3.forEach((e) => console.log(e));


// while
let i = 0;
while(i < 3){
    console.log('test');
    i++;
}

// do-while : 적어도 한번은 실행
let j = 0;
do {
    console.log('test');
    j++;
} while (j<0);


let result = 3;

switch(result){
    case 1 : console.log('1번 정답!'); break;
    case 2 : console.log('2번 정답!'); break;
    case 3 : console.log('3번 정답!'); break;
    default : console.log('- n -');
}