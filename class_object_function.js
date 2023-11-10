// function

function MyInfo(name,age){
    return console.log(`Hello, my name is ${name} and I'm ${age} years old.`); 
}

function add(a,b){

    return a + b
}

MyInfo('Wonsik',26);
MyInfo('Seoyeon',24);
console.log(add(10,20));


// object

let user1 =  {
    name : "wonsik Pyo",
    age : 26,
    address:"서울특별시 서초구",

};


let user2 = {
    name : "seoyoen Lee",
    age : 24,
    address:"서울특별시 서초구 우면동"
}   

console.log(user1.name);
console.log(user2.name);

// class

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age    
    }

    sayName(){
        console.log(`my name is ${this.name}`);
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
    }

}


let person1 = new Person('John',25);
let person2 = new Person('Son',30)
person1.greet();
person2.sayName();




