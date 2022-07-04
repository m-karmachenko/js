// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'shalom');

// function logger(){
//     console.log('text');
// }

// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId);

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame(){
        if(pos == 300){
            clearInterval();
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });



// function logger(){
//     if(i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }


// let id = setTimeout(function log(){
//     console.log('privet');
//     id = setTimeout(log, 500);
// }, 500);

