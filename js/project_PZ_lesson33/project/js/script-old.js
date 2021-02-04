/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Обливион",
        "Куб"
    ]
};

/*
//1. Удаляем рекламу от спонсоров
const adv = document.querySelectorAll('.promo__adv img'); //внутрни класса .promo__adv будут img
adv.forEach(img => {
    img.remove();
});

//2. Меняем жанр фильма
const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';
*/

const adv = document.querySelectorAll('.promo__adv img'), //внутрни класса .promo__adv будут img
      poster = document.querySelector('.promo__bg'), //получаем блок с постером и информацией о фильме
      genre =  poster.querySelector('.promo__genre'), //получаем жанр фильма
      movieList = document.querySelector('.promo__interactive-list'); //получаем блок с просмотренными фильмами

adv.forEach(img => {
    img.remove();
});

genre.textContent = 'ДРАМА';
poster.style.backgroundImage = 'url("img/bg.jpg")'; //меняем задний фон постера

movieList.innerHTML = ""; //очищаем список от записей в нем

movieDB.movies.sort(); //сортируем список фильмов по алфавиту

movieDB.movies.forEach((film, i) => { //film - каждый элемент в массиве, i - номер по порядку
    //a = a + 1
    //строка записанная в innerHTML интерпретируется как верстка
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

//console.log(poster.innerHTML); //получаем содержимое poster со страницы