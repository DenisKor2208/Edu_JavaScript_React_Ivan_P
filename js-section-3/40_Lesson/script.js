//40 урок - Работа с датами;

'use strict';

const now = new Date();

/* Get-теры
console.log(now.getFullYear()); // получение текущего года
console.log(now.getMonth()); // получение текущего месяца
console.log(now.getDate()); // получение текущего числа
console.log(now.getDay()); // получение текущего дня
console.log(now.getUTCHours()); // получение текущего времени по UTC

console.log(now.getTimezoneOffset()); //разница между часовым поясом и UTC в минутах
console.log(now.getTime()); //получаем кол-во милисекунд прошедших с 1970 года
*/

/* Set-теры
console.log(now.setHours(18)); //устанавливаем текущее время(час)
console.log(now);
*/

/*проверка быстродействия работы системы*/
let start = new Date();

for (let i = 0; i< 1000000; i++) {
    let some = i ** 3; //возводим в степень 3 число i
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);