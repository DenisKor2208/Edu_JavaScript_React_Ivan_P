//Урок 31. События и обработчики
'use strict';

const btn = document.querySelector('button');

//привязываем действие к событию по кнопке, но такой способ почти не используется
/*btn.onclick = function(){
    alert('Click');
};*/

/************************
//правильный вариант привязки действия по событию
btn.addEventListener('click', () => {
    alert('Click');
});

//событие при наведении курсора на элемент на странице
btn.addEventListener('mouseenter', (event) => { //event - информация об элементе; event - можно задать любое
    console.log('Hover');
    console.log(event);
    event.target.remove(); //удаляем элемент со страницы при наведении на него
});
***************************/

/**************************************
//функция по событию срабатывает и мы ее удаляем
let i = 0;
const deleteElement = (event) => { //добавляем в переменную callback-функцию для того чтобы ее потом удалить
    console.log(event.target);
    i++;
    if (i==1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);
******************************/

/********************************
//отменяем стандартное поведение браузера
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault(); //этот код помещается в самое начало обработчика событий
    console.log(e.target);
});
*******************************/

/*************************/
//Привязываем действие по событию на все элементы из псевдомассива
const btnAll = document.querySelectorAll('button');
btnAll.forEach(btn => {
    btn.addEventListener('click', (ev) => { //(тип события, обработчик, опции)
        console.log(ev.type);
        console.log(ev.target);
    }, {once: true}); // {once: true} - аналог removeEventListener, обработчик сработает только один раз
});