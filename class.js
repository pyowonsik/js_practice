
// class Fruit{
//     constructor(name,color,taste){
//         this.name = name;
//         this.color = color;
//         this.taste = taste;
//     }

//     sayTaste(){
//         console.log(`나는 맛이 ${this.taste}`);
//     }
// }

// let melon = new Fruit('멜론','초록색','달콤하다.');


// melon.sayTaste();


// 클래스 상속 - extends와 super()의 사용
class Animal{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    meal(){
        console.log(`${this.name}는 식사중이다.`);
    }

}

class Dog extends Animal{

    constructor(name,sex,breed){
        super(name,sex);
        this.breed = breed;
    }

    info(){
        console.log(`${this.name} 의 성별은 ${this.sex}이고, 견종은 ${this.breed} 이다.`);
    }
}

let myDog = new Dog('미나','암컷','말티즈');
myDog.meal();   // 미나가 식사중이다.
myDog.info();   // 미나 의 성별은 암컷이고, 견종은 말티즈이다.
console.log(myDog instanceof Animal);
console.log(myDog instanceof Dog);



