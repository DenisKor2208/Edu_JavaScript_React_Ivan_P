/*12 урок. Практика ч.1 Начинаем создавать приложение.*/
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