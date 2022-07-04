const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.toggle('blue'));

// console.log(btns[0].classList.toggle('blue'));
// console.log(btns[0].classList.item(0));
//length - количество подключенных классов
// console.log(btns[0].classList.length);

// item(n) получить класс под номером n
// console.log(btns[0].classList.item(0));

// добавить класс classList.add()

// console.log(btns[0].classList.add('red'));

// удалить класс classList.remove()
// console.log(btns[0].classList.remove('blue'));
// btns[1].addEventListener('click', () => {
//     btns[1].classList.toggle('red');
// });

// toggle

// console.log(btns[0].classList.toggle('blue'));

// Проверить наличие класса

// if (btns[0].classList.contains('blue')){
//     console.log('Синий есть!');
// }


btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

//className - устарело

// Делегирование событий
// назначаем обработку событий на родителя

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == 'BUTTON'){
        console.log('Э, урод, ты в кнопку ткнул)');
    }
});

const newBtn = document.createElement('button');
newBtn.classList = 'blue';
wrapper.appendChild(newBtn);