//Урок 42. Параметры документа, окна и работа с ними

'use strict';

//console.dir(document); //информация про document - глобальную сущность

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//ширина без учета margin и bottom
/*const width = box.clientWidth,
      height = box.clientHeight;

const width = box.offsetWidth,
      height = box.offsetHeight;

const width = box.scrollWidth,
      height = box.scrollHeight;
console.log(width, height);
*/

btn.addEventListener('click', ()=>{
    //box.style.height = box.scrollHeight + 'px'; //присваиваем элементу box размер высоты во весь текст; стиль прописывается не в css, а прямо в верстку
    console.log(box.scrollTop); //сколько пикселей текста уже пролистано
});

console.log(box.getBoundingClientRect()); //координаты элемента box

//информация о всех стилях примененных к конкретному элементу в css; можно только получить, но нельзя редактировать
const style = window.getComputedStyle(box);
console.log(style.display);

//clientWidth - информация по всему окну браузера
console.log(document.documentElement.clientWidth);