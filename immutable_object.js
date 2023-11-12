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


console.log('----- Object의 속성을 추가 , 삭제 , 변경 -----');


/*
Extensible
이 메소드는 객체에 새로운 속성의 추가를 금지합니다.
이미 존재하는 속성의 값은 수정할 수 있습니다.
이미 존재하는 속성을 삭제하는 것은 가능합니다.
*/

console.log('----- Extensible -----')

console.log(wonsik);

// 객체에 속성 확정 여부 : true 
console.log(Object.isExtensible(wonsik)) 


// 객체에 속성 확정 여부가 true이기 때문에 key - value 추가
wonsik['position'] = 'backend';
console.log(wonsik);


// 속성 확장 금지 -> Object.prevenExtensions
Object.preventExtensions(wonsik);
console.log(Object.isExtensible(wonsik));

// 속성 확장이 되지 않는다.
wonsik['company'] = 'digicaps';
console.log(wonsik);

// 삭제는 가능하다.
delete wonsik['position'];
console.log(wonsik);


/*
Seal
Object.seal()은 Object.preventExtensions()의 특성을 포함하며, 추가로 존재하는 속성의 삭제를 금지합니다.
이미 존재하는 속성의 값은 수정할 수 있습니다.
*/

console.log('----- Seal -----')

const seoyeon = {   
    name  : '이서연',
    year : 2000,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(seoyeon);
console.log(Object.isSealed(seoyeon));


// seal을 true로 변환
Object.seal(seoyeon);
console.log(Object.isSealed(seoyeon));

// Object.preventExtensions()의 특성을 포함 하기 때문에 속성 추가 불가
seoyeon['position'] = 'backend';
console.log(seoyeon);


// 삭제 또한 불가.
delete seoyeon['year'];
console.log(seoyeon);


// 객체의 속성을 변경
Object.defineProperty(seoyeon,'name',{
    value : '오늘은 일요일'
});
console.log(seoyeon);

/*
Frozen
Object.freeze()는 Object.seal()의 특성을 포함하며, 추가로 이미 존재하는 속성의 값 수정도 금지합니다.
객체가 완전히 고정되어 더 이상 변경되지 않습니다.
*/


console.log('----- Frozen -----')

const codefactory = {   
    name  : '코드팩토리',
    year : 1992,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}


console.log(codefactory);
console.log(Object.isFrozen(codefactory));
Object.freeze(codefactory);
console.log(Object.isFrozen(codefactory));


codefactory['position'] = 'fullStack';
console.log(codefactory);

delete codefactory['name'];
console.log(codefactory);



// 수정이 불가능 하기때문에 에러 발생 
// Object.defineProperty(codefactory,'name',{
//     value : '오늘은 일요일'
// });
console.log(Object.getOwnPropertyDescriptor(codefactory,'name'));



// Extensible , Seal , Frozen 모두 상위 오브젝트에만 적용이 되고 , 하위 오브젝트에는 적용되지 않는다. 