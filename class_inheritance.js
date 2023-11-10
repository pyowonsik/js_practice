class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound) {
      super(sound);
      this.name = name;
    }
  
    bark() {
      super.makeSound(); 
      console.log(`${this.name} is barking!`);
    }
  }
  
  const myDog = new Dog('Buddy', 'Woof');
  myDog.bark();