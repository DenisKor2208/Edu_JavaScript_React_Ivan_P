/*26 урок. Динамическая типизация в JS.*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

//1) To string
console.log(typeof(String(null))); //out: String
console.log(String(null)); //out: null
console.log(typeof(String(4))); //out: String

//2) Конкатенация
console.log(typeof(5 + ''); //out: String
console.log(typeof(null + ''); //out: String
//**********************/

const num = 5;
console.log("https://vk.com/catalog/" + num); //старый формат использования
//**********************/

const fontSize = 26 + 'px'; //класический пример использования динамической типизации
//**********************/

//To Number

//1)
console.log(typeof(Number('4'))); //out: number

//2)унарный плюс - конвертация строки в число
console.log(typeof(+'4')); //out: number

//3)
console.log(typeof(parseInt("15px", 10))); //out: number
//****************/

let answer = +prompt("Hello", "");

//To boolean

//0, '', null, undefined, NaN - всегда будет превращаться в ложь

//1)
let switcher = null;
if (switcher) { //условие не вылолнится - будет ложь
    console.log('Working...');
}

switcher = 1;
if (switcher) { //условие вылолнится - будет true
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4'))); //out: Boolean

//3)Очень редко используется
console.log(typeof(!!"4444")); //out: Boolean