"use strict";

// let a = 5,
//       b = a;

// b = b + 5;
// console.log(b,a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const objCopy = obj;

// objCopy.a = 10;

// console.log(obj, objCopy);

//Примитивные типы данных передаются по значению, а объекты по ссылке

function copy(mainObj){
    let objCopy = {};
    for (let key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const nubmers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(nubmers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(nubmers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(nubmers, add));

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);

