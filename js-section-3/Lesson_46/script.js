//Урок 46. Контекст вызова. This

'use strict';

//1) Обычная функция: this = window, но если use strict - this = undefined
/*
 * Работает без элемента 'use strict'(строгий режим);
 * выводит глобальный объект window
 */
/*function showThis() {
    console.log(this);
}
showThis();*/


/*************************/
//Обычная функция: this = window, но если use strict - this = undefined
/*
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        //return this.a + this.b;
        return a + b; 
    }
    console.log(sum());
}
showThis(4, 5); //используем замыкание - ответ 9
*/
/**************************/

/****************/
//2) Контекст у методов объекта - сам объект
/*
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        //console.log(this); //ссылается на сам объект
        function shout() {
            console.log(this); //this = undefined потому, что это обычная функция и не относится к методу объекта
        }
        shout();
    }
};
obj.sum();
*/
/*********************/

/*************************/
//ОЧЕНЬ ОЧЕНЬ ВАЖНОЕ ПРАВИЛО
//3) This в конструкторах и классах - это новый экземпляр объекта
//ОЧЕНЬ ОЧЕНЬ ВАЖНОЕ ПРАВИЛО
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23); 
*/
/**************************/

/**************************/
//4) Hучное присвоение this любой функции: call, apply, bind
/*
function sayName(surname) {
    console.log(this);
    console.log(this.name + ' ' + surname);
}
const user = {
    name: 'John'
};
//методы одинаковые - разные только по атрибутам
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));
*/
/**************************/

const btn = document.querySelector('button');

//при классической callback функции
btn.addEventListener('click', function() {
    console.log(this.style.backgroundColor = 'red'); //this - сама кнопка на которой происходит событие
    //через this можно редактировать btn: btn.style.backgroundColor = 'red';
});
/*
 * В обработчиках событий, когда мы используем функцию через слово "function" - мы имеем доступ к this(event.target).
 * Если мы используем стрелочную функцию, то контекст с "this" теряется и нужно использовать event.target.
 */

//при callback функции в стрелочном виде
//у стрелочной функции нет своего контекста вызова и она его берет у своего родителя
const obj = {
    num: 5,
    sayNumber: function() { //sayNumber ссылается на obj
        const say = () => { //берет контекст у sayNumber
            console.log(this);
        };
        say();
    }
};
obj.sayNumber(); //результатом будет объект obj

/*************/
const double = a => a * 2; //классический вариант { return a * 2; }; / если стрелочная функция принимает только один аргумент, то его можно писать без круглых скобок
console.log(double(4));
/*************/