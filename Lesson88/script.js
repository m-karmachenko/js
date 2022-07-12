'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map(item => item.toLocaleLowerCase());
console.log(answers);