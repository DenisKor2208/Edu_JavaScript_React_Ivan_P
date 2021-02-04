'use strict';

//получить элемент по id
const box = document.getElementById('box');
console.log(box);

//получаем псевдомассив со всеми элементами с тегом button которые есть на странице
const buttons = document.getElementsByTagName('button'); //[0] - получаем первый элемент псевдомассива
console.log(buttons); //[0] - получаем первый элемент псевдомассива

//получаем псевдомассив со всеми элементами по классу
const circles = document.getElementsByClassName('circle');
console.log(circles);

//получаем псевдомассив с css селекторами с классом heart
//выводим каждый элемент через цикл foreach
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => { //используем callback
    console.log(item);
});

//получаем один элемент * работаем с css селекторами
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

//получаем один элемент
const oneDiv = document.querySelector('div');
console.log(oneDiv);