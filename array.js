let numbers = [1,2,3,4,5];
let colors = ['red','blue','black','orange'];
const str = 'Apple,Orange,Banana,Mango';


console.log(numbers.join('-')); 
console.log(str.split(','));
console.log(colors.reverse());
console.log(numbers.slice(0,2))
console.log(numbers.find((e) => e % 2 == 0));
console.log(numbers.filter((e) => e % 2 == 0));

console.log(numbers.map((e) => e *e ));
console.log(numbers.some((e) => e%2 == 0));
console.log(numbers.every((e) => e%2 == 0));


console.log(numbers.sort((a,b) => a -b));
console.log(numbers.sort((a,b) => b - a));

console.log(numbers.reduce((previous,next) => {
    return previous + next},0));

console.log(numbers.filter((e) => e % 2 == 0).find((e) => e < 3))