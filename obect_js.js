const person = {
    name : '표원식',
    age : 26,
    study : function(){
      return '표원식이 공부를 합니다.';
    }
}

console.log(person.study());


const personToMap = new Map([
    ['name', '이서연'],
    ['age', 24],
    ['study', function() { return '이서연이 공부를 합니다.'; }]
  ]);
  
  console.log(personToMap.get('study')());