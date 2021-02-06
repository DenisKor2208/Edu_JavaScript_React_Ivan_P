'use strict';

document.addEventListener('DOMContentLoaded', () => {


    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'), //все пункци в блоке "Выберите стиль питания"
          tabsContent = document.querySelectorAll('.tabcontent'), //картинка с описанием слева от блока "Выберите стиль питания"
          tabsParent = document.querySelector('.tabheader__items'); //весь блок "Выберите стиль питания"

    function hideTabContent() { //для каждого элемента блока картинки с описанием слева и блока "Выберите стиль питания" скрыть все элементы
        tabsContent.forEach(item => {
            item.classList.add('hide'); //для каждого элемента назначаем класс hide, которому в css назначен display: none
            item.classList.remove('show', 'fade'); //для каждого элемента назначаем класс show, которому в css назначен display:block
        });
        
        tabs.forEach(item =>{ //у каждого пункта в блоке "Выберите стиль питания" удаляем класс активного пункта tabheader__item_active
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade'); //элементу под номером i назначаем видимость и анимацию
        tabsContent[i].classList.remove('hide'); //у элемента под номером i удаляем класс невидимости
        tabs[i].classList.add('tabheader__item_active');
    }

    //вызываем функции обозначенные выше
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { //делегируем на все элементы блока "Выберите стиль питания" действия по событию click
        const target = event.target; //ссылка на объект/элемент, который был инициатором события/на котором произошло событие
        
        if (target && target.classList.contains('tabheader__item')) { //contains - возвращает логическое значение, указывающее, имеет ли элемент указанный класс или нет
            tabs.forEach((item, i) => {
                if (target == item) { //при этой проверке все элементы в tabs перебираются и если кликнутый элемент(target) тот же самый который сейчас перебирается в tabs.forEach, то числовой индекс из tabs.forEach подставляется в функцию
                    hideTabContent();
                    showTabContent(i);
                }
            });

        }

});


//Timer
const deadline = '2021-08-22';

//получаем разницу между дедлайном и текушей датой
function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), //получаем разницу между текущей и необходимой датой в кол-ве миллисекунд
          days = Math.floor(t / (1000 * 60 * 60 * 24)), // получаем из миллисекунд дни и округляем до ближайшего целого
          hours = Math.floor((t / (1000 * 60 * 60)) % 24), //получаем кол-во часов из остатка от деления
          minutes = Math.floor((t / 1000 / 60) % 60), //получаем кол-во минут из остатка от деления
          seconds = Math.floor((t / 1000) % 60); // получаем кол-во секунд из остатка от деления
    
    return { // возвращаем объект с результатами
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//подставляем к однозначным числам ноль в начало
function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) { //1. серектор для работы, дэдлайн
    
    //получаем элементы со html страницы для изменения
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); //устанавливаем таймер на запуск функции через каждую секунду

    updateClock(); //вызываем функцию для инициализации и удаления "мигания в верстке"

    function updateClock() {
        const t = getTimeRemaining(endtime); //получаем разницу между датами

        days.innerHTML = getZero(t.days);//можно и textContent - разницы не будет
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.t <= 0) { //если время вышло, то останавливаем таймер
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);










});