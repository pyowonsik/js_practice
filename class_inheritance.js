class IdolModel{
  name;
  year;

  constructor(name,year){
    this.name = name;
    this.year = year;
  }


}

class FemaleIdolModel extends IdolModel{
  dance(){
    return `${this.name}이 춤을 춥니다.`
  }
}

class MaleIdolModel extends IdolModel{
  sing(){
    return `${this.name}이 노래를 합니다.`
  } 
}

const sayInfo = (name,year) => {
  console.log(`${name}은(는)  ${year}년생이다.`)
};

const yujin = new FemaleIdolModel('안유진',2003);
const jimin = new MaleIdolModel('지민',1995);
console.log(yujin.dance());
console.log(jimin.sing());
sayInfo(yujin.name,yujin.year);

console.log(yujin instanceof IdolModel);
console.log(yujin instanceof MaleIdolModel);
console.log(yujin instanceof FemaleIdolModel);

console.log('--------------------------------');



console.log(jimin instanceof IdolModel);
console.log(jimin instanceof MaleIdolModel);
console.log(jimin instanceof FemaleIdolModel);

