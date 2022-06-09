'use strict';

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

//Нарисовать треугольник с помошью символа звездочки

for (let i = 0; i < 8; i++){
   console.log('*'.repeat(i));
}

//Task 1
for (let i = 5; i<=10; i++){
    console.log(i);
}

//Task 2
for(let i = 20; i > 10; i--){
    if(i === 13){
        break;
    }
    console.log(i);
}

//Task 3
for (let i = 0; i<=10; i+=2){
    console.log(i);
}

//Task 4
let i = 2;
while (i <= 16){
    if ( i % 2 === 0){
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

// for (let i = 2; i <= 16; i++){
//     if (i % 2 === 0){
//         continue;
//     } else {
//         console.log(i);
//     }
// }

//Task 5
let arr = [];
for(let i = 5; i <= 10; i++){
    arr[i-5] = i;
}
console.log(arr);

//First tast
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}
firstTask();

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for(let i = 0; i < data.length; i++){
        if( typeof(data[i]) == 'string'){
            data[i] = data[i] + ' - done';
        } else {
            data[i] = data[i] * 2;
        }
    }
    
    // Не трогаем
    return data;
}
console.log(secondTask());

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(let i = data.length; i > 0; i--){
        result.push(data[i-1]);
    }
        

    
    // Не трогаем
    return result;
}
console.log(thirdTask());

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(let i = data.length; i > 0; i--){
        result[data.length - i] = data[i-1];
    }
        

    
    // Не трогаем
    return result;
}
console.log(thirdTask());

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней

// for(let i = 1; i <= 11; i+=2){
//     result += ' '.repeat(lines) + '*'.repeat(i) + '\n';
// }

// console.log(result);



// const lines = 5;
// let result = '';

// for(let i = 0; i <= lines; i++){
//     for (let j = lines; j > i; j--)
//     {
//         result += ' ';
//     }
//     result += '*'.repeat(1 + i*2) + '\n';
// }

// console.log(result);


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);