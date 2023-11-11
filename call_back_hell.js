
// call back hell : JavaScript를 이용한 비동기 프로그래밍시 발생하는 문제로서, 함수의 매개 변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상을 말한다.
function waitAndRun(){

    setTimeout(() => {
        console.log('끝')
    } , 2000);
}

// waitAndRun();

function waitAndRun2 (){

    setTimeout(() => {
        console.log('1번 콜백 끝');
       setTimeout(()=>{
        console.log('2번 콜백 끝');
            setTimeout(() => {
                console.log('3번 콜백 끝');
            },2000);
       },2000);
    },2000);
}

// waitAndRun2();


// // Promise
// const timeOutPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// }); 


// timeOutPromise.then((res) => {
//     console.log('---then---')
//     console.log(res);
// })


const getPromise = (seconds) => new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve('완료'); 
        reject('에러');
    },seconds * 1000);
}); 

getPromise(3).then((res) => {
    console.log('--- first then ---')
    console.log(res)
    // return getPromise(3);
}).catch((res) => {
    console.log('--- first catch ---')
    console.log(res)}).finally(() => {
        console.log('--- finally --- ');
    });

// .then((res) => { 
//     console.log('--- seconds then ---')
//     console.log(res);
//     return getPromise(4);
// }).then((res) => {
//     console.log('--- third then ---')
//     console.log(res);
//     return getPromise(4);
// }).then((res) => {
//     console.log('--- last then ---')
//     console.log(res);
// });


Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res) => {
    console.log(res);
});