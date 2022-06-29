'use strict';

// function exp(x, n){
//     let result = 1;
//     for (let i = 0; i < n; i++){
//         result = result * x;
//     }
//     return result;
// }

// console.log(exp(2, 0));
// console.log(exp(2, 4));
// console.log(exp(3, 3));

function exp2(x, n){
    if(n == 0){return 1;}
    if(n > 1){
        if (n === 1) {
            return x;
        } else { exp2(x, n - 1);}
    }
}

console.log(exp2(2, 0));
console.log(exp2(2, 4));
console.log(exp2(3, 3));