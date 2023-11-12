const getPromise = (seconds) => new Promise((resolve,reject) => setTimeout(() => {resolve('에러')},seconds*1000));

// getPromise(3).then((res) => {console.log(res)});

// async function runner(){
//     try{
//         const result1 = await getPromise(3);
//         console.log(result1);
//         const result2 = await getPromise(3);
//         console.log(result2);
//         const result3 = await getPromise(3);
//         console.log(result3);
//     }catch(e){
//         console.log('--- error ---');
//         console.log(e);
//     }finally{
//         console.log('--- finally ---');
//     }
// }

// runner();

const fetchData = () => new Promise((resolve) => setTimeout(() => {
    resolve({'code' : 1})
},2000));

async function getData() {
    const resp = await fetchData();
    console.log(resp.code);
}

getData();


// callBackHell : 함수안에 함수 넣어서 이어나감 
// Promise 함수를 then 사용해서 이어나감으로써 가독성이 좋아짐 -> 비교적 간단한 비동기에서 사용
// Promise 함수를 async await 사용만으로 일반적인 코드 처럼 흐름제어