// 'use strict';

// const str = 'Test';
// const arr = [1,2,4];
// console.log(str.length);
// console.log(arr.length);

// console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


//extended tasks

// function calculateVolumeAndArea(a) {
//     let value,
//         square;
    
//     if( typeof(a) != 'number' || Number.isInteger(a) != true){
//         return 'При вычислении произошла ошибка';
//     } else if ( a <= 0) {
//         return 'При вычислении произошла ошибка';
//     } else {
//         value = a * a * a;
//         square = 6 * a * a;
//         return `Объем куба: ${value}, площадь всей поверхности: ${square}`;
//     }
// }

// console.log(calculateVolumeAndArea(5)); 

// function getCoupeNumber(num) {
//     if (!Number.isInteger(num) || num < 0 || isNaN(num)){
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (num == 0 || num > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else {
//         if (Number.isInteger(num/4)){
//             return num/4;
//         }
//         return Math.floor(num/4) + 1;   
//     }
// }

// console.log(getCoupeNumber(4));



// let 
//     num = 92,
//     hours,
//     minutes;


// hours = Math.floor(num/60);
// minutes = num - hours*60;

// console.log(hours);
// console.log(minutes);

// Место для первой задачи
// function getTimeFromMinutes(num) {
//     let hours,
//     minutes;
//     let result = '';

    


//     if ( typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
//         return 'Ошибка, Проверьте данные';
//     } else if (num === 0) {
//         return 'Это 0 часов и 0 минут';
//     } else {
//         hours = Math.floor(num/60);
//         minutes = num - hours*60;
        
//         if (hours === 0){
//             result += 'Это 0 часов';
//         } else if (hours === 1) {
//             result += 'Это 1 час';
//         } else if ( hours >=2 && hours <= 4) {
//             result += `Это ${hours} часа`;
//         } else if (hours >= 5 && hours <= 10){
//             result += `Это ${hours} часов`;
//         }

//         if (minutes === 11) {
//             result += ' и 11 минут';
//         } else if (minutes % 10 === 0){
//             result += ` и ${minutes} минут`
//         } else if (minutes % 10 === 1) {
//             result += ` и ${minutes} минутa`;
//         }  else if (minutes % 10 >= 2 && minutes % 10 <= 4) {
//             result += ` и ${minutes} минуты`;
//         } else if (minutes % 10 >= 5 && minutes % 10 <= 9){
//             result += ` и ${minutes} минут`;
//         }

//         return result;
//     }
// }

// console.log(getTimeFromMinutes(151));

function findMaxNumber(a,b,c,d) {
    if ( typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
}