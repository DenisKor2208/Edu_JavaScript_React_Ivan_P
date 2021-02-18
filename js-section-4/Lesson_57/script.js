//Урок 57. Методы перебора массивов

'use strict';

/*********************
//filter
const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemar'];

//перебираем элементы и возвращаем только те, которые подходят под условия
const shortNames = names.filter((name) => { //name - это каждый отдельный элемент
    return name.length < 5;
});
console.log(shortNames);
**********************/

/*********************
//map - позволяет взять исходный массив и изменить каждый элемент внитри него
const answers = ['IvAn', 'AnnA', 'Hello',];
const result = answers.map(function(item) {
    return item.toLocaleLowerCase(); //перезаписываем значения в нижнем регистре
});
console.log(result);
**********************/

/*********************
//every - если все элементы массива подходят под заданное условие, то только в таком случае нам вернется true
//some - берет массив, перебирает его и если хотябы один элемент из этого массива подходит к какому-либо заданному условию, то в таком случаем нам вернется true, иначе false
const some = [4, 'qwq', 'asfdsaasdf'];
console.log(some.some(item => typeof(item) === 'number'));   //если не раскрывать фигурные скобки, то слово return подставится автоматически
console.log(some.every(item => typeof(item) === 'number'));
**********************/

/*********************
//reduce - метод перебора и проходится по каждому элементу в массиве
//числа
const arr = [4, 5, 1, 3, 2, 6];
const result = arr.reduce((sum, current) => { //складываем все элемениты в массиве arr; sum - сумма всех элементов; current - текущий элемент
    return sum + current;
});
console.log(result);

//текст
const arr = ['apple', 'pear', 'plum'];
const result = arr.reduce((sum, current) => {
    return `${sum}, ${current}`;   //складываем в строчку все элементы через интерполяцию
}, 'dog');    //последним аргументом reduce можно задать начальное значение
console.log(result);
**********************/

//Пример применения из практики
/******************/
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)  //entries - создаем из объекта obj - массив с массивами
.filter(item => item[1] === 'persone')   //оставляем только те массивы у которых второй элемент строго равен persone
.map(item => item[0]);
console.log(newArr);
/******************/