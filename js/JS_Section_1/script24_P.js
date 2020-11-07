/*24 урок. Практика ч.4 Используем объекты.*/
/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict'; //директива для объявления скриптовому файлу, что мы работаем в современном режиме


const personalMovieDB = {
        count: 0,
        movies: {},
        actor: {},
        genres: [],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
            }
        },
        rememberMyFilms: function() {
            for (let i = 1; i <= personalMovieDB.count; i++) {
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
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                alert("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                alert("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                alert("Вы киноман");
            } else {
                alert("Произошла ошибка");
            }
        },
        showMyDB: function(hidden) {
            if (!hidden){
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
                if (genre == null || genre === "") {
                    console.log("Вы ввели некорректные данные или не ввели их вообще");
                    i--;
                } else {
                    personalMovieDB.genres[i - 1] = genre;
                }
            }
            personalMovieDB.genres.forEach(function(item, i) { //(значение, индекс, массив)
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            }); 
        },
        toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            }else {
                personalMovieDB.privat = true;
            }
        }

};
