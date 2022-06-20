"use strict";

//arrays

// const arr = [1,2,3,6,8];

//Удаление последнего элемента
// arr.pop();
// console.log(arr);

// arr.push(10);
// console.log(arr);

//shift-удаляет unshift-вставляет
// arr.shift();
// arr.unshift(9);
// console.log(arr);

const str = prompt('Введите список товаров','');
const products = str.split(',');
console.log(products);

console.log(products.join('; '));