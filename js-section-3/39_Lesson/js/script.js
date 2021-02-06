//39 урок - анимация. Скрипты и время их выполнения. setTimeout и setInterval

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /*************работа с setTimeout - запуск чего либо один раз через заданный интервал
    const timerId = setTimeout(function(){
        console.log('Hello');
    }, 2000);

    //вариант использования setTimeout с переменной text и передача значения для этой переменной третьим параметром
    const timerIdOne = setTimeout(function(text){
        console.log(text);
    }, 4000, 'Hello World');

    //вариант использования setTimeout с внешней функцией
    const timerIdTwo = setTimeout(logger, 6000);
    function logger() {
        console.log('text');
    }

    //В переменные timerId, timerIdOne, timerIdTwo помещаются ID таймеров

    //останавливаем таймер по его ID
    clearInterval(timerIdTwo);
    *************/

    /*************работа с setInterval - запуск чего либо много раз через заданный интервал
    const btn = document.querySelector('.btn');
    let timerId, //выносим переменную в глобальную область видимости
        i = 0;

    btn.addEventListener('click', () => {
        timerId = setInterval(logger, 500);
    });

    function logger() {
        if (i === 3) {
            clearInterval(timerId);
            i = 0;
        } else {
            console.log('text');
        i++;
        }
    }
    *****************/

    /*рекурсивный вызов setTimeout
    let id = setTimeout(function log(){
        console.log('Hello');
        id = setTimeout(log, 500);
    }, 500);
    */
   
    /*Пример работы самой простой анимации с использованием setInterval*/
    const btn = document.querySelector('.btn'); //получаем кнопку по классу
    
    function myAnimation() {
        const elem = document.querySelector('.box'); //получаем элемент по классу box
        let pos = 0; //начальная позиция элемента

        const id = setInterval(frame, 10); //устанавливаем интервал запуска скрипта

        function frame() {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }

    btn.addEventListener('click', myAnimation);





});