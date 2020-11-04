/*18 урок. Практика ч.3 Используем функции.*/
/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict'; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let numberOfFilms; //

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actor: {},
        genres: [],
        privat: false
    };

function rememberMyFilms() {
    for (let i = 1; i <= numberOfFilms; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
              if (a != null && a != "" && a.length < 50) { /*если a не отменено и a не пустое и a не больше 50 - нужный нам ответ соответствует этим параметрам*/
                  const b = prompt("На сколько оцените его?", "");
                  if (b != null && b != "") {
                    personalMovieDB.movies[a] = b;
                  } else {
                     i--;
                  }
              } else {
                i--;
              }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB.movies);