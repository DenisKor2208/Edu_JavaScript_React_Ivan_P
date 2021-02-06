'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
















});