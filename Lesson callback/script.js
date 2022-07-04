function first(callback){
    setTimeout(() => {
        console.log('Я учу javascript');
    },5000);
    callback();
}

function second(){
    console.log('Я изучил javascript');
}

first(second);


// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок');
// });