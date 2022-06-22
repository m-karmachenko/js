'use strict';

//Старый вариант
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'magenta';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';


box.style.cssText = 'background-color: blue; width: 500px';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'yellow';
// });

// const div = document.createElement('div');
// const div1 = document.createElement('div');
// const text = document.createTextNode('Ассаляму алейкум бродяги');


// div.classList.add('black');
// div1.classList.add('black');
// wrapper.append(div);
// wrapper.prepend(div1);

// circles[0].remove();


hearts[0].replaceWith(circles[0]);