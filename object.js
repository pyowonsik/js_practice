let fruits1 = {
    name : 'strawBerry',
    color : 'red',
    size : 'small',
    myInfo : function () {
        console.log(`나는 ${this.name} 입니다.`);
    } 
}

let fruits2 = new Object();

fruits2.name = 'banana';
fruits2.color = 'yellow';
fruits2.size = 'middle'
fruits2.myInfo = function() {
    console.log(`나는 ${this.name} 입니다.`);
}

class Fruits {
    constructor(name,color,size){
        this.name = name;
        this.color = color;
        this.size = size;
    }

    myInfo() {
        console.log(`나는 ${this.name} 입니다.`);
    }
}


// let melon = new Fruits('melon','green','big');

// console.log(Object.isExtensible(melon));
// melon.taste = 'sweet';
// console.log(melon);


// Object.preventExtensions(melon);
// melon.isSeed = true;
// console.log(melon);

// delete melon.taste;
// console.log(melon);


// let melon = new Fruits('melon','green','big');
// console.log(Object.isSealed(melon));

// Object.seal(melon);
// console.log(Object.isSealed(melon));

// melon.taste = 'sweet';
// console.log(melon);

// delete melon.size;
// console.log(melon);

// Object.defineProperty(melon,'color',{
//     value : 'blue'
// });
// console.log(melon);



let melon = new Fruits('melon','green','big');
console.log(Object.isFrozen(melon));
Object.freeze(melon);
console.log(Object.isFrozen(melon));

melon.taste = 'sweet';
console.log(melon);

delete melon.size;
console.log(melon);

// Object.defineProperty(melon,'color',{
//     value : 'blue'
// });


console.log(Object.getOwnPropertyDescriptor(melon,'name'));





























// var fruits = new Array();
// fruits.push(fruits1);
// fruits.push(fruits2);
// fruits.push(fruits3);

// fruits.forEach((e) => {
//     console.log(`name : ${e.name}`);
//     console.log(`color : ${e.color}`);
//     console.log(`size : ${e.size}`);
// });

// console.log(fruits1.name);
// console.log(fruits1['name']);

// fruits1.color = 'blue';
// console.log(fruits1.color);

// delete fruits1.color;
// console.log(fruits1);


// fruits1.color = 'red';
// console.log(fruits1);

