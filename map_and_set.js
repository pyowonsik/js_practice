let myMap = new Map();

myMap.set('name','John');
myMap.set('age',25);

console.log(myMap.get('name'));
console.log(myMap.get('age'));


myMap.forEach((value,key) => {
    console.log(`${key} : ${value}`);
});

let player = new Map([   
    ["Kevin" , 20],
    ["Haaland",20],
    ["Messi",30]
]);


player.forEach((value,key) => {
    console.log(`${key} : ${value}`)
})

player.set('Wonsik',26);
console.log(player.get('Wonsik'));


console.log(Array.from(player.keys()))



let mySet = new Set([1,2,3,2,1]);
mySet.add(4)

console.log(mySet.has(2)) // true

mySet.forEach((e) => {
    console.log(e)
});

