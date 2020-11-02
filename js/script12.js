/*12 урок. Практика ч.1 Начинаем создавать приложение.*/

  
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

"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", ""),
    personaMovieDB = {
        count: numberOfFilms,
        movies: {},
        actor: {},
        genres: [],
        privat: false
    };

let questionNameOneFilm = prompt("Один из последних просмотренных фильмов?", ""),
    questionRatingOneFilm = prompt("На сколько оцените его?", ""),
    questionNameTwoFilm = prompt("Один из последних просмотренных фильмов?", ""),
    questionRatingTwoFilm = prompt("На сколько оцените его?", "");

personaMovieDB.movies[questionNameOneFilm] = questionRatingOneFilm;
personaMovieDB.movies[questionNameTwoFilm] = questionRatingTwoFilm;

console.log(personaMovieDB);