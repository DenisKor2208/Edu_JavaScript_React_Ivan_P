/*5 урок. Переменные и строгий режим.*/
"use strict"; //директива для объявления скриптовому файлу что мы работаем в современном режиме

let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

const obj = {
    a: 50
};
obj.a = 1;
console.log(obj.a);

//var является устаревшим и использовать его нельзя
var name = 'Ivan';
name = 'Alex';

{ //переменная let и const видны в этом случае только в пределах этих скобок(область видимости) и за ОВ недоступны
    let result = 50;
}

alert(5);
[].push('a');