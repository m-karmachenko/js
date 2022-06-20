/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }    
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = +prompt('На сколько оцените его?', '');
            if ( a != null && a != '' && a.length < 50 && b != null && b != ''){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }  
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDb: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function(){
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if ( a != null && a != '' && a.length < 50){
                personalMovieDB.genres[i] = a;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((e,i) => {
            console.log(`Любимый жанр #${i+1} - это ${e}`);
        });    
    },
    toggleVisibleMyDb: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }  
};

personalMovieDB.writeYourGenres();