/*17 урок. Методы и свойства строк и чисел*/
"use strict"; //директива для объявления скриптовому файлу, что мы работаем в современном режиме

const str = "Test";
const arr = [1, 2, 4];

/*Свойства используются именно через точку*/
console.log(str.length); //кол - во символов внитри строки
console.log(arr.length); //кол - во элементов массива
console.log(str[2]); //получаем символ строки по индексу
console.log(str.toUpperCase()); //изменение регистра символов строки на верхний
console.log(str.toLowerCase()); //изменение регистра символов строки на нижний

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); /* Поиск искомой подстроки - вывод номера индекса с которого начинается наша подстрока*/

const logg = "Hello World";
console.log(logg.slice(6, 11)); /*Возврат части строки с n-ого по m-ный символ невключительно*/
//или
console.log(logg.slice(6)); //Возврат с указанной позиции и до конца строки
//или
console.log(logg.slice(-5, -1)); //Возврат с конца в начало строки
console.log(logg.substring(6, 11)); //тоже что и slice
console.log(logg.substr(6, 5)); /*тоже что и slice только первый аргумент передается "начало/индекс первой буквы подстроки", а второй аргумент длинна подстроки*/

/*Числа*/
const num = 12.2;
console.log(Math.round(num));// Округление числа до ближайшего целого

const test = "12.2px";
console.log(parseInt(test));//Преобразует строку в целое число
console.log(parseFloat(test));//Преобразует строку в число с плавающей точкой