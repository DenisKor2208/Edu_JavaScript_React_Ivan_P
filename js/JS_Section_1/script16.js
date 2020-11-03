/*16 урок. Функции. Стрелочные функции.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}
showFirstMessage("Hello World");

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() { /*эта функция существует еще до того как код запустится, как объявление переменных var*/
    let num = 50; /*таким образом можно обозначить функции в самом конце страницы, а вызвать их например в самом начале для соблюдения стилистики*/
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//функциональное выражение
const logger = function() {
    console.log("Hello");
};
logger();

//Стрелочная функция
const kalk = (a, b) => a + b,
//или
      talk = (a, b) => {return a + b},
//или
      halk = (a, b) => {
          //наш код
          console.log(1);
          return a + b;
      };