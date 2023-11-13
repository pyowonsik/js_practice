// function Fruit(name,color,taste){
//     this.name = name;
//     this.color = color;
//     this.taste = taste;
// }

// Fruit.prototype.sayTaste = function() {
//     console.log(`나는 맛이 ${this.taste}`);
// }


// let strawBerry = new Fruit('딸기','빨강색','새콤달콤하다.');

// strawBerry.sayTaste();


// prototype 상속 - call() 와 create() 사용 
function Animal(name,sex) {
    this.name = name;
    this.sex = sex;
  }
  
Animal.prototype.meal = function() {
    console.log(`${this.name}는 식사중이다.`);
};
  
function Dog(name,sex, breed) {
    Animal.call(this, name,sex);
    this.breed = breed;
}
  
Dog.prototype = Object.create(Animal.prototype);
  
Dog.prototype.info = function() {
    console.log(`${this.name} 의 성별은 ${this.sex}이고, 견종은 ${this.breed} 이다.`);
};
  
var myDog = new Dog('버디','수컷' ,'골드 리트리버');
myDog.meal(); // 버디는 식사중이다.
myDog.info(); // 버디 의 성별은 수컷이고, 견종은 골드 리트리버이다.

console.log(myDog instanceof Animal);
console.log(myDog instanceof Dog);

  
