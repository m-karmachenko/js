//fibonachi

// function fib(n) {
//     const arr = [0,1];
    
//     if (n < 0 || !Number.isInteger(n)){
//         return 'Ошибка';
//     } else if (n === 0) { 
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }

//     for(let i = 2; i < n; i++){
//         arr.push(arr[i-1] + arr[i-2]);    
//     }

//     return arr;
// }


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;
    let newVal = 0;
    for(let i = 0; i < num; i++){
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
              
        newVal = first + second;
        first = second;
        second = newVal;

    }
    return result;
}
console.log(fib(13));

