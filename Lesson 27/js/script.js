function sayHello(name){
    return `Привет, ${name}`;
}

console.log(sayHello('Михалыч'));

function returnNeighboringNumbers(num) {
    const array = [];
    array.push(num - 1);
    array.push(num);
    array.push(num + 1);
    return array;
}

console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(base, multiplier) {
    let result = '';
    if ( typeof(multiplier) == 'number' && multiplier > 0 && multiplier != 0 ){
        for(let i = 1; i <= multiplier; i++){
            if (i == multiplier) {
                result += base*i;
            } else {
                result += base*i + '---';
            }
        }
        return result;
    } else {
        return base;
    }
}

console.log(getMathResult(3, 10));