'use strict';

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum(a,b));
// }

// showThis(4,5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();


// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 23);


// 1) Обычная функция: this = window, но если стоит use strict - undefined
// 2) Если мы используем метод внутри объекта, то this ссылается на этот объект
// 3) this в конструкторах и классах - новый экземляр объектов
// 4) ручная привязка this: call, apply, bind


// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num){
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// bind - создает новую функцию и под нее подвязывает объект

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
});