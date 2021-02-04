//32. Навигация по DOM - элементам, data-атрибуты, преимущество for/of
'use strict';

/*
//получаем body
console.log(document.body);

//получаем head
console.log(document.head);

//получаем HTML
console.log(document.documentElement);


//получаем узлы которые являются детьми у body
console.log(document.body.childNodes);

//первый и последний элементы относительно body как родителя
console.log(document.body.firstChild); //получение первой ноды
console.log(document.body.firstElementChild); //получение первого элемента

console.log(document.body.lastChild);
console.log(document.body.lastElementChild); //получение последнего элемента
*/

/*
//получаем родителей элементов
console.log(document.querySelector('#current').parentNode); //получаем родителя элемента с id "current"
console.log(document.querySelector('#current').parentElement); -аналог команды выше
console.log(document.querySelector('#current').parentNode.parentNode); //получаем родителя родителя элемента с id "current"


//получаем дата атрибуты, ноды(узлы) и элементы
console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling); //получение следующей текстовой ноды(узла) от элемента с дата-атрибутом
console.log(document.querySelector('[data-current="3"]').previousSibling); //получение предыдущей текстовой ноды(узла) от элемента с дата-атрибутом

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //получаем следующий элемент от элемента с дата-атрибутом
console.log(document.querySelector('[data-current="3"]').previousElementSibling); //получаем предыдущий элемент от элемента с дата-атрибутом
*/


/************************/
//перебор коллекции нод
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}