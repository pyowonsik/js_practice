
// prototype
function Animal(type,name,sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function(){
    console.log(this.sound);
}


const dog = new Animal("개","멍멍이","멍멍");
const cat = new Animal("고양이","야옹이","야옹");

dog.say();
cat.say();

console.log(dog.shardValue);
console.log(cat.shardValue);

// class
class Person{
 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(this.name);
    }

}


const minsoo = new Person('민수',20);
const tom = new Person('톰',25);

minsoo.sayName();


class Chulsoo extends Person {
    constructor(age){
        super("철수",age);
    }
}

class Tim extends Person{
    constructor(age){
        super("팀",age);
    }
}

const chulsoo = new Chulsoo(20);
const tim = new Tim(34);

chulsoo.sayName();
tim.sayName();