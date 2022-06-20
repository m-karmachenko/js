"use strict";


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
};

// console.log(options.name);

//Удалить свойство
// delete options.name;
// console.log(options);
let counter = 0;
for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойтво ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойтво ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(Object.keys(options).length);