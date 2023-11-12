const person = {
    name : 'Kevin',
    age : 26,
    study : function(){
      return `${this.name}이 공부를 합니다.`;
    }
}

console.log(person.name);
console.log(person.age);
console.log(person.study());


const Mina = new Map([
    ['name', 'Mina'],
    ['age', 24],
    ['study', function() { return `${Mina.get('name')}가 공부를 합니다.`; }]
  ]);
  

  console.log(Mina.get('name'));
  console.log(Mina.get('age'));
  console.log(Mina.get('study')());

  const wonsik = {   
    name  : '표원식',
    year : 1998,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}