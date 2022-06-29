"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a');

// в реальных проектах не используется
// имеет проблемы (если вызвать дважды, то выполняется только один раз)

// btn.onclick = function(){
//     alert(1);
// };

// btn.onclick = function(){
//     alert(1);
// };

// btn.addEventListener('click', () => {
//     alert(1);
// });

// btn.addEventListener('click', () => {
//     alert(1);
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


link.addEventListener('click', (e) => {
    e.preventDefault();
});