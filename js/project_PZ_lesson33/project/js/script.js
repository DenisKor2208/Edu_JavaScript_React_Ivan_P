/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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

    const addForm = document.querySelector('form.add'), //получаем форму у которой есть класс "add"
          addInput = addForm.querySelector('.adding__input'), //получаем поле в форме
          checkboxForm = addForm.querySelector('[type="checkbox"]'), //получаем чекбокс в форме
          buttonAddFilm = addForm.querySelector('button'); //получаем кнопку в блоке

    addForm.addEventListener('submit', (e) => { //привязываемся к событию отправки формы на сервер
        e.preventDefault(); //отменяем стандартные действия браузера

        let newFilm = addInput.value; //получаем текст введенного фильма
        const favorite = checkboxForm.checked; //поллучаем значение чекбокса

        if (newFilm) { /*если переменная с введенным новым фильмом не пустая, то сработает код ниже, иначе пустая строка не будет записанна в список*/
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm); //добавляем в массив в самый конец текст введенного фильма
            sortArr(movieDB.movies); //сортируем список фильмов в массиве

            createMovieList(movieDB.movies, movieList); // очищаем и создаем(заполняем) список фильмов заново
        }

        e.target.reset(); // аналогична команде addForm.reset(); - сбрасываем(очищаем) поле ввода фильма
    });

    const adv = document.querySelectorAll('.promo__adv img'), //внутрни класса .promo__adv будут img
        poster = document.querySelector('.promo__bg'), //получаем блок с постером и информацией о фильме
        genre =  poster.querySelector('.promo__genre'), //получаем жанр фильма
        movieList = document.querySelector('.promo__interactive-list'); //получаем блок с просмотренными фильмами

    const deleteAdv = (arr) => { //функция очистки элементов массива
        arr.forEach(img => {
            img.remove();
        });
    };

    const makeChanges = () => { //функция замены названия фильма и заднего фона
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("img/bg.jpg")'; //меняем задний фон постера
    };

    const sortArr = (arr) => { //функция сортировки массива
      arr.sort();
    };

    function createMovieList(films, parent) { //функция очистки списка и заполнения его данными из заданного массива
        parent.innerHTML = ""; //очищаем список от записей в нем
        sortArr(films);

        films.forEach((film, i) => { //film - каждый элемент в массиве, i - номер по порядку
            //a = a + 1
            //строка записанная в innerHTML интерпретируется как верстка
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
           btn.addEventListener('click', () => {
              btn.parentElement.remove();
              films.splice(i, 1);
              createMovieList(films, parent);
           });
        });
    }

    //вызов созданных функций
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});